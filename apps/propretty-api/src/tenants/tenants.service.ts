import { Injectable } from '@nestjs/common';
import { CreateOneTenantArgs } from 'src/@generated/tenant/create-one-tenant.args';
import { FindManyTenantArgs } from 'src/@generated/tenant/find-many-tenant.args';
import { FindUniqueTenantArgs } from 'src/@generated/tenant/find-unique-tenant.args';
import { UpdateOneTenantArgs } from 'src/@generated/tenant/update-one-tenant.args';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TenantsService {
  constructor(private prismaService: PrismaService) {}

  create(args: CreateOneTenantArgs) {
    return this.prismaService.client.tenant.create(args);
  }

  findAll(args: FindManyTenantArgs) {
    return this.prismaService.client.tenant.findMany(args);
  }

  findOne(args: FindUniqueTenantArgs) {
    return this.prismaService.client.tenant.findUnique(args);
  }

  update(args: UpdateOneTenantArgs) {
    return this.prismaService.client.tenant.update(args);
  }

  remove(id: number) {
    return `This action removes a #${id} tenant`;
  }
}
