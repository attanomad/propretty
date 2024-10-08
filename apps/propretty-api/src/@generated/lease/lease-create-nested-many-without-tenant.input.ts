import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LeaseCreateWithoutTenantInput } from './lease-create-without-tenant.input';
import { Type } from 'class-transformer';
import { LeaseCreateOrConnectWithoutTenantInput } from './lease-create-or-connect-without-tenant.input';
import { LeaseCreateManyTenantInputEnvelope } from './lease-create-many-tenant-input-envelope.input';
import { Prisma } from '@prisma/client';
import { LeaseWhereUniqueInput } from './lease-where-unique.input';

@InputType()
export class LeaseCreateNestedManyWithoutTenantInput {

    @Field(() => [LeaseCreateWithoutTenantInput], {nullable:true})
    @Type(() => LeaseCreateWithoutTenantInput)
    create?: Array<LeaseCreateWithoutTenantInput>;

    @Field(() => [LeaseCreateOrConnectWithoutTenantInput], {nullable:true})
    @Type(() => LeaseCreateOrConnectWithoutTenantInput)
    connectOrCreate?: Array<LeaseCreateOrConnectWithoutTenantInput>;

    @Field(() => LeaseCreateManyTenantInputEnvelope, {nullable:true})
    @Type(() => LeaseCreateManyTenantInputEnvelope)
    createMany?: LeaseCreateManyTenantInputEnvelope;

    @Field(() => [LeaseWhereUniqueInput], {nullable:true})
    @Type(() => LeaseWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LeaseWhereUniqueInput, 'id'>>;
}
