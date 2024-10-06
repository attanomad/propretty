import { registerEnumType } from '@nestjs/graphql';

export enum Role {
  Agent = 'agent',
  Admin = 'admin',
  Root = 'root',
  Tenant = 'tenant',
}

registerEnumType(Role, { name: 'Role' });
