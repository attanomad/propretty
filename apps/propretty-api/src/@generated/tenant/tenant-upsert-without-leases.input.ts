import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TenantUpdateWithoutLeasesInput } from './tenant-update-without-leases.input';
import { Type } from 'class-transformer';
import { TenantCreateWithoutLeasesInput } from './tenant-create-without-leases.input';
import { TenantWhereInput } from './tenant-where.input';

@InputType()
export class TenantUpsertWithoutLeasesInput {

    @Field(() => TenantUpdateWithoutLeasesInput, {nullable:false})
    @Type(() => TenantUpdateWithoutLeasesInput)
    update!: TenantUpdateWithoutLeasesInput;

    @Field(() => TenantCreateWithoutLeasesInput, {nullable:false})
    @Type(() => TenantCreateWithoutLeasesInput)
    create!: TenantCreateWithoutLeasesInput;

    @Field(() => TenantWhereInput, {nullable:true})
    @Type(() => TenantWhereInput)
    where?: TenantWhereInput;
}
