import { faker } from '@faker-js/faker';
import { Tenant } from '@prisma/client';

export type SeedTenantData = Pick<
  Tenant,
  'nationalId' | 'firstName' | 'lastName' | 'dateOfBirth' | 'address'
>;

const tenants: SeedTenantData[] = Array.from(Array(40)).map(() => ({
  nationalId: faker.string.numeric({ length: 13 }),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  address: faker.location.streetAddress(),
  dateOfBirth: faker.date.birthdate(),
}));

export default tenants;
