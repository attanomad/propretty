import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TenantWhereUniqueInput } from './tenant-where-unique.input';
import { Type } from 'class-transformer';
import { TenantCreateWithoutLeasesInput } from './tenant-create-without-leases.input';

@InputType()
export class TenantCreateOrConnectWithoutLeasesInput {

    @Field(() => TenantWhereUniqueInput, {nullable:false})
    @Type(() => TenantWhereUniqueInput)
    where!: Prisma.AtLeast<TenantWhereUniqueInput, 'id' | 'nationalId'>;

    @Field(() => TenantCreateWithoutLeasesInput, {nullable:false})
    @Type(() => TenantCreateWithoutLeasesInput)
    create!: TenantCreateWithoutLeasesInput;
}
