import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LeaseCreateWithoutTenantInput } from './lease-create-without-tenant.input';
import { Type } from 'class-transformer';
import { LeaseCreateOrConnectWithoutTenantInput } from './lease-create-or-connect-without-tenant.input';
import { LeaseUpsertWithWhereUniqueWithoutTenantInput } from './lease-upsert-with-where-unique-without-tenant.input';
import { LeaseCreateManyTenantInputEnvelope } from './lease-create-many-tenant-input-envelope.input';
import { Prisma } from '@prisma/client';
import { LeaseWhereUniqueInput } from './lease-where-unique.input';
import { LeaseUpdateWithWhereUniqueWithoutTenantInput } from './lease-update-with-where-unique-without-tenant.input';
import { LeaseUpdateManyWithWhereWithoutTenantInput } from './lease-update-many-with-where-without-tenant.input';
import { LeaseScalarWhereInput } from './lease-scalar-where.input';

@InputType()
export class LeaseUpdateManyWithoutTenantNestedInput {

    @Field(() => [LeaseCreateWithoutTenantInput], {nullable:true})
    @Type(() => LeaseCreateWithoutTenantInput)
    create?: Array<LeaseCreateWithoutTenantInput>;

    @Field(() => [LeaseCreateOrConnectWithoutTenantInput], {nullable:true})
    @Type(() => LeaseCreateOrConnectWithoutTenantInput)
    connectOrCreate?: Array<LeaseCreateOrConnectWithoutTenantInput>;

    @Field(() => [LeaseUpsertWithWhereUniqueWithoutTenantInput], {nullable:true})
    @Type(() => LeaseUpsertWithWhereUniqueWithoutTenantInput)
    upsert?: Array<LeaseUpsertWithWhereUniqueWithoutTenantInput>;

    @Field(() => LeaseCreateManyTenantInputEnvelope, {nullable:true})
    @Type(() => LeaseCreateManyTenantInputEnvelope)
    createMany?: LeaseCreateManyTenantInputEnvelope;

    @Field(() => [LeaseWhereUniqueInput], {nullable:true})
    @Type(() => LeaseWhereUniqueInput)
    set?: Array<Prisma.AtLeast<LeaseWhereUniqueInput, 'id'>>;

    @Field(() => [LeaseWhereUniqueInput], {nullable:true})
    @Type(() => LeaseWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<LeaseWhereUniqueInput, 'id'>>;

    @Field(() => [LeaseWhereUniqueInput], {nullable:true})
    @Type(() => LeaseWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<LeaseWhereUniqueInput, 'id'>>;

    @Field(() => [LeaseWhereUniqueInput], {nullable:true})
    @Type(() => LeaseWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LeaseWhereUniqueInput, 'id'>>;

    @Field(() => [LeaseUpdateWithWhereUniqueWithoutTenantInput], {nullable:true})
    @Type(() => LeaseUpdateWithWhereUniqueWithoutTenantInput)
    update?: Array<LeaseUpdateWithWhereUniqueWithoutTenantInput>;

    @Field(() => [LeaseUpdateManyWithWhereWithoutTenantInput], {nullable:true})
    @Type(() => LeaseUpdateManyWithWhereWithoutTenantInput)
    updateMany?: Array<LeaseUpdateManyWithWhereWithoutTenantInput>;

    @Field(() => [LeaseScalarWhereInput], {nullable:true})
    @Type(() => LeaseScalarWhereInput)
    deleteMany?: Array<LeaseScalarWhereInput>;
}
