import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TenantCreateWithoutLeasesInput } from './tenant-create-without-leases.input';
import { Type } from 'class-transformer';
import { TenantCreateOrConnectWithoutLeasesInput } from './tenant-create-or-connect-without-leases.input';
import { TenantUpsertWithoutLeasesInput } from './tenant-upsert-without-leases.input';
import { Prisma } from '@prisma/client';
import { TenantWhereUniqueInput } from './tenant-where-unique.input';
import { TenantUpdateToOneWithWhereWithoutLeasesInput } from './tenant-update-to-one-with-where-without-leases.input';

@InputType()
export class TenantUpdateOneRequiredWithoutLeasesNestedInput {

    @Field(() => TenantCreateWithoutLeasesInput, {nullable:true})
    @Type(() => TenantCreateWithoutLeasesInput)
    create?: TenantCreateWithoutLeasesInput;

    @Field(() => TenantCreateOrConnectWithoutLeasesInput, {nullable:true})
    @Type(() => TenantCreateOrConnectWithoutLeasesInput)
    connectOrCreate?: TenantCreateOrConnectWithoutLeasesInput;

    @Field(() => TenantUpsertWithoutLeasesInput, {nullable:true})
    @Type(() => TenantUpsertWithoutLeasesInput)
    upsert?: TenantUpsertWithoutLeasesInput;

    @Field(() => TenantWhereUniqueInput, {nullable:true})
    @Type(() => TenantWhereUniqueInput)
    connect?: Prisma.AtLeast<TenantWhereUniqueInput, 'id' | 'nationalId'>;

    @Field(() => TenantUpdateToOneWithWhereWithoutLeasesInput, {nullable:true})
    @Type(() => TenantUpdateToOneWithWhereWithoutLeasesInput)
    update?: TenantUpdateToOneWithWhereWithoutLeasesInput;
}
