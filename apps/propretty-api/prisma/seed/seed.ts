import { PrismaClient, PropertyAmenity, User } from '@prisma/client';
import { configDotenv } from 'dotenv';
import configuration from 'src/config/configuration';
import { extendPrismaClient } from 'src/prisma/prisma.extension';
import { Role } from 'src/roles/role.enum';
import propertyTypes from './data/propert-type';
import properties from './data/property';
import propertyAmenities from './data/property-amenity';

configDotenv();

const config = configuration();
const prisma = extendPrismaClient(new PrismaClient(), {
  saltRounds: config.security.password.saltRounds,
  fileHost: config.host,
});
const users: Omit<User, 'id'>[] = [
  { username: 'admin1', roles: [Role.Admin], hashedPassword: 'changeme' },
  { username: 'admin2', roles: [Role.Admin], hashedPassword: 'changeme' },
  { username: 'agent1', roles: [Role.Agent], hashedPassword: 'changeme' },
  { username: 'agent2', roles: [Role.Agent], hashedPassword: 'changeme' },
  { username: 'viewer1', roles: [Role.Viewer], hashedPassword: 'changeme' },
  { username: 'viewer2', roles: [Role.Viewer], hashedPassword: 'changeme' },
];

async function main() {
  const upsertedUsers = await Promise.all(
    users.map(({ username, roles, hashedPassword }) =>
      prisma.user.upsert({
        where: { username },
        update: {},
        create: {
          username,
          roles,
          hashedPassword,
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
          author: { select: { id: true, username: true } },
          priceList: true,
          type: true,
          amenities: { select: { id: true, name: true } },
        },
        create: {
          ...p,
          priceList: {
            createMany: { data: p.priceList, skipDuplicates: true },
          },
          authorId: author.id,
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
