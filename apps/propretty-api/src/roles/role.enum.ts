import { registerEnumType } from '@nestjs/graphql';

export enum Role {
  Viewer = 'viewer',
  Agent = 'agent',
  Admin = 'admin',
}

registerEnumType(Role, { name: 'Role' });
