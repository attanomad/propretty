import { Action } from 'src/casl/enums/action.enums';
import { Role } from 'src/roles/role.enum';
import permissions, { SeedPermissionData } from './permissions';

const readonlyPermissions = permissions.filter((p) => p.action === Action.Read);

const roles: { name: Role; permissions: SeedPermissionData[] }[] = [
  { name: Role.Root, permissions },
  // TODO Filter out root permissions. Don't know what they are right now
  { name: Role.Admin, permissions: permissions.filter((p) => true) },
  { name: Role.Agent, permissions: readonlyPermissions },
  { name: Role.Tenant, permissions: readonlyPermissions },
];

export default roles;
