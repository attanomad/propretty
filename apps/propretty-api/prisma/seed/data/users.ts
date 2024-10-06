import { Role } from 'src/roles/role.enum';

export type SeedUserData = {
  username: string;
  password: string;
  roles?: string[];
};

const users: SeedUserData[] = [
  { username: 'root1', roles: [Role.Root], password: 'changeme' },
  { username: 'admin1', roles: [Role.Admin], password: 'changeme' },
  { username: 'admin2', roles: [Role.Admin], password: 'changeme' },
  { username: 'agent1', roles: [Role.Agent], password: 'changeme' },
  { username: 'agent2', roles: [Role.Agent], password: 'changeme' },
  { username: 'tenant1', roles: [Role.Tenant], password: 'changeme' },
  { username: 'tenant2', roles: [Role.Tenant], password: 'changeme' },
  { username: 'viewer1', password: 'changeme' },
  { username: 'viewer2', password: 'changeme' },
];

export default users;
