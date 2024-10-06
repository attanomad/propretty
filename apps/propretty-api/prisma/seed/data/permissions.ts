import { Permission, PermissionSubject } from '@prisma/client';
import { Action } from 'src/casl/enums/action.enums';

export type SeedPermissionData = Pick<
  Permission,
  'subject' | 'action' | 'field' | 'conditions'
>;

const permissions: SeedPermissionData[] = [
  ...Object.values(PermissionSubject)
    .map((subject) =>
      Object.values(Action).map<SeedPermissionData>((action) => ({
        subject,
        action,
        field: [],
        conditions: null,
      })),
    )
    .flat(),
];

export default permissions;
