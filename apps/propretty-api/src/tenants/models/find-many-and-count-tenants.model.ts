import { ObjectType } from '@nestjs/graphql';
import { Tenant } from 'src/@generated/tenant/tenant.model';
import { DataWithCount } from 'src/find-many-count.model';

@ObjectType()
export class FindManyAndCountTenants extends DataWithCount(Tenant) {}
