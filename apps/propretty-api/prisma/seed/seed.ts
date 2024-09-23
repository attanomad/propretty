import { PrismaClient } from '@prisma/client';
import { configDotenv } from 'dotenv';
import configuration from 'src/config/configuration';
import { extendPrismaClient } from 'src/prisma/prisma.extension';
import { Role } from 'src/roles/role.enum';
import { User } from 'src/users/models/user.model';

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
// prettier-ignore
const propertyTypes = [
  { name: "Single-Family Home", description: "A standalone residential building designed to house one family." },
  { name: "Condominium", description: "A private residential unit within a larger building or complex with shared amenities." },
  { name: "Townhouse", description: "A multi-level home that shares one or two walls with adjacent properties but has its own entrance." },
  { name: "Apartment", description: "A rental unit within a larger residential building, typically leased rather than owned." },
  { name: "Duplex", description: "A residential building divided into two separate living units, often with a shared wall." },
  { name: "Villa", description: "A luxurious standalone home, typically larger and with more amenities, often located in upscale areas." },
  { name: "Penthouse", description: "A top-floor unit of a condominium or apartment building, often offering luxurious amenities and expansive views." },
  { name: "Studio", description: "A compact living space that combines the bedroom, living area, and kitchen into a single room." },
  { name: "Loft", description: "A large, open living space, often converted from industrial or commercial buildings, characterized by high ceilings and few interior walls." },
  { name: "Cottage", description: "A small, quaint house, typically found in rural or vacation areas, offering a cozy atmosphere." }
];
// prettier-ignore
const propertyAmenities = [
  { name: "Swimming Pool", description: "A private or shared pool for swimming and relaxation, often found in upscale properties." },
  { name: "Fitness Center", description: "A fully equipped gym available to residents for exercise and wellness." },
  { name: "Parking Garage", description: "A secure, covered space for vehicle parking, often with assigned spots." },
  { name: "Rooftop Terrace", description: "An outdoor space located on the roof, providing scenic views and relaxation areas." },
  { name: "24/7 Security", description: "A security system with personnel or surveillance to monitor the property at all times." },
  { name: "Gated Community", description: "A residential community with controlled access to enhance security and privacy." },
  { name: "Private Balcony", description: "An outdoor extension of a unit providing private space with views." },
  { name: "Pet-Friendly", description: "A property that allows residents to keep pets, often with designated areas for pet activities." },
  { name: "High-Speed Internet", description: "Access to fast and reliable internet connectivity for residents." },
  { name: "Concierge Service", description: "On-site staff available to assist residents with various services, such as booking reservations." },
  { name: "Playground", description: "A designated area for children to play, often with equipment like swings and slides." },
  { name: "Business Center", description: "A workspace equipped with computers, printers, and meeting rooms for residents." },
  { name: "Laundry Facilities", description: "On-site or in-unit washers and dryers for residents' convenience." },
  { name: "Clubhouse", description: "A shared space for socializing, hosting events, and recreational activities." },
  { name: "BBQ Area", description: "An outdoor area with barbecue grills for cooking and entertaining." },
  { name: "Garden or Green Space", description: "Landscaped areas for relaxation, walks, or gardening." },
  { name: "On-Site Maintenance", description: "Property staff available to handle repairs and maintenance issues promptly." },
  { name: "Sauna", description: "A heated room or cabin designed for relaxation and detoxification." },
  { name: "Tennis Court", description: "An outdoor or indoor court available for residents to play tennis." },
  { name: "Bicycle Storage", description: "A secure space for residents to store their bicycles." }
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
      prisma.propertyAmenitiy.upsert({
        where: { name },
        update: { name, description },
        create: { name, description },
      }),
    ),
  );

  console.log('upserted amenities: ', upsertedAmenities);
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
