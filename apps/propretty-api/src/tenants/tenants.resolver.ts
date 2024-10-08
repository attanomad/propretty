import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateOneTenantArgs } from 'src/@generated/tenant/create-one-tenant.args';
import { FindManyTenantArgs } from 'src/@generated/tenant/find-many-tenant.args';
import { FindUniqueTenantArgs } from 'src/@generated/tenant/find-unique-tenant.args';
import { Tenant } from 'src/@generated/tenant/tenant.model';
import { UpdateOneTenantArgs } from 'src/@generated/tenant/update-one-tenant.args';
import { TenantsService } from './tenants.service';

@Resolver(() => Tenant)
export class TenantsResolver {
  constructor(private readonly tenantsService: TenantsService) {}

  @Mutation(() => Tenant)
  createTenant(@Args() args: CreateOneTenantArgs) {
    return this.tenantsService.create(args);
  }

  @Query(() => [Tenant])
  findTenants(@Args() args: FindManyTenantArgs) {
    return this.tenantsService.findAll(args);
  }

  @Query(() => Tenant)
  findUniqueTenant(@Args() args: FindUniqueTenantArgs) {
    return this.tenantsService.findOne(args);
  }

  @Mutation(() => Tenant)
  updateTenant(@Args() args: UpdateOneTenantArgs) {
    return this.tenantsService.update(args);
  }

  @Mutation(() => Tenant)
  removeTenant(@Args('id', { type: () => Int }) id: number) {
    return this.tenantsService.remove(id);
  }
}
