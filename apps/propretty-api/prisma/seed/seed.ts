import { PrismaClient, PropertyAmenity } from '@prisma/client';
import { configDotenv } from 'dotenv';
import configuration from 'src/config/configuration';
import { extendPrismaClient } from 'src/prisma/prisma.extension';
import permissions from './data/permissions';
import propertyTypes from './data/propert-type';
import properties from './data/property';
import propertyAmenities from './data/property-amenity';
import roles from './data/roles';
import users from './data/users';

configDotenv();

const config = configuration();
const prisma = extendPrismaClient(new PrismaClient(), {
  saltRounds: config.security.password.saltRounds,
  fileHost: config.host,
});

async function main() {
  const upsertedPermissions = await Promise.all(
    permissions.map(({ subject, action, ...rest }) =>
      prisma.permission.upsert({
        where: { subject_action: { subject, action } },
        create: { subject, action, ...rest },
        update: {},
      }),
    ),
  );

  console.log('upserted permissions: ', upsertedPermissions);

  const upsertedRoles = await Promise.all(
    roles.map(({ name, permissions }) =>
      prisma.role.upsert({
        where: { name },
        create: {
          name,
          permissions: {
            connect: permissions.map(({ subject, action }) => ({
              subject_action: { subject, action },
            })),
          },
        },
        update: {},
      }),
    ),
  );

  console.log('upserted roles: ', upsertedRoles);

  const upsertedUsers = await Promise.all(
    users.map(({ username, roles, password }) =>
      prisma.user.upsert({
        where: { username },
        update: {},
        create: {
          username,
          // This is a plaintext password, will be hashed by our Prisma Client Extension
          hashedPassword: password,
          roles:
            Array.isArray(roles) && roles.length > 0
              ? { connect: roles.map((name) => ({ name })) }
              : undefined,
        },
      }),
    ),
  );

  console.log('upserted users: ', upsertedUsers);

  const upsertedPropertyTypes = await Promise.all(
    propertyTypes.map(({ name, description }) =>
      prisma.propertyType.upsert({
        where: { name },
        update: { name, description },
        create: { name, description },
      }),
    ),
  );

  console.log('upserted property types: ', upsertedPropertyTypes);

  const upsertedAmenities = await Promise.all(
    propertyAmenities.map(({ name, description }) =>
      prisma.propertyAmenity.upsert({
        where: { name },
        update: { name, description },
        create: { name, description },
      }),
    ),
  );

  console.log('upserted amenities: ', upsertedAmenities);

  const upsertedProperties = await Promise.all(
    properties.map((p) => {
      const author =
        upsertedUsers[Math.floor(Math.random() * upsertedUsers.length)];
      const propertyType =
        upsertedPropertyTypes[
          Math.floor(Math.random() * upsertedPropertyTypes.length)
        ];
      const amenities = getRandomItems<PropertyAmenity>(upsertedAmenities);

      return prisma.property.upsert({
        where: { uniqueCode: p.uniqueCode },
        update: {},
        include: {
          priceList: true,
          type: true,
          amenities: { select: { id: true, name: true } },
        },
        create: {
          ...p,
          priceList: {
            createMany: { data: p.priceList, skipDuplicates: true },
          },
          typeId: propertyType.id,
          status: 'ACTIVE',
          amenities: { connect: amenities.map(({ id }) => ({ id })) },
          // amenities: { connect: [{ id: amenities[0].id }] },
        },
      });
    }),
  );

  console.log('upserted properties: ', upsertedProperties);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

function getRandomItems<T>(arr: T[]): T[] {
  // Generate a random number of items to select (1 to arr.length)
  const numItems = Math.floor(Math.random() * arr.length) + 1;

  // Shuffle the array using the Fisher-Yates shuffle algorithm
  const shuffled = arr.slice(); // Create a copy of the array
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // Return the first 'numItems' from the shuffled array
  return shuffled.slice(0, numItems);
}
