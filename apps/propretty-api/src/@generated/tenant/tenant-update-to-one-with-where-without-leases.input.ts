import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TenantWhereInput } from './tenant-where.input';
import { Type } from 'class-transformer';
import { TenantUpdateWithoutLeasesInput } from './tenant-update-without-leases.input';

@InputType()
export class TenantUpdateToOneWithWhereWithoutLeasesInput {

    @Field(() => TenantWhereInput, {nullable:true})
    @Type(() => TenantWhereInput)
    where?: TenantWhereInput;

    @Field(() => TenantUpdateWithoutLeasesInput, {nullable:false})
    @Type(() => TenantUpdateWithoutLeasesInput)
    data!: TenantUpdateWithoutLeasesInput;
}
