import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TenantCreateWithoutLeasesInput } from './tenant-create-without-leases.input';
import { Type } from 'class-transformer';
import { TenantCreateOrConnectWithoutLeasesInput } from './tenant-create-or-connect-without-leases.input';
import { Prisma } from '@prisma/client';
import { TenantWhereUniqueInput } from './tenant-where-unique.input';

@InputType()
export class TenantCreateNestedOneWithoutLeasesInput {

    @Field(() => TenantCreateWithoutLeasesInput, {nullable:true})
    @Type(() => TenantCreateWithoutLeasesInput)
    create?: TenantCreateWithoutLeasesInput;

    @Field(() => TenantCreateOrConnectWithoutLeasesInput, {nullable:true})
    @Type(() => TenantCreateOrConnectWithoutLeasesInput)
    connectOrCreate?: TenantCreateOrConnectWithoutLeasesInput;

    @Field(() => TenantWhereUniqueInput, {nullable:true})
    @Type(() => TenantWhereUniqueInput)
    connect?: Prisma.AtLeast<TenantWhereUniqueInput, 'id' | 'nationalId'>;
}
