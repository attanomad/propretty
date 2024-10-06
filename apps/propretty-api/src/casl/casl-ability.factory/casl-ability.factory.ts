import { AbilityBuilder, PureAbility } from '@casl/ability';
import {
  createPrismaAbility,
  PrismaQuery,
  Subjects,
  WhereInput,
} from '@casl/prisma';
import { Injectable } from '@nestjs/common';
import {
  PermissionSubject,
  Property,
  PropertyAmenity,
  PropertyType,
  User,
} from '@prisma/client';
import { Request } from 'express';
import { PrismaService } from 'src/prisma/prisma.service';

export type SupportedSubjects =
  | Subjects<{
      [PermissionSubject.User]: User;
      [PermissionSubject.Property]: Property;
      [PermissionSubject.PropertyType]: PropertyType;
      [PermissionSubject.Amenity]: PropertyAmenity;
      [PermissionSubject.Client]: {};
      [PermissionSubject.Agent]: {};
      [PermissionSubject.Tenant]: {};
    }>
  | 'all';

export type AppAbility = PureAbility<[string, SupportedSubjects], PrismaQuery>;

@Injectable()
export class CaslAbilityFactory {
  constructor(private prismaService: PrismaService) {}

  async createForUser(user: Request['user']) {
    const { can, cannot, build } = new AbilityBuilder<AppAbility>(
      createPrismaAbility,
    );

    if (user.userRoles) {
      const roles = await this.prismaService.client.role.findMany({
        where: { name: { in: user.userRoles } },
        include: { permissions: true },
      });

      roles.forEach((role) => {
        role.permissions.forEach((p) => {
          if (p.conditions !== null && typeof p.conditions !== 'object')
            throw new Error(`Invalid permission conditions`);

          const func = p.isAllowed ? can : cannot;

          func(
            p.action,
            p.subject,
            p.field,
            p.conditions ? (p.conditions as WhereInput<any>) : undefined,
          );
        });
      });
    }

    return build();
  }
}
