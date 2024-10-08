import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LeaseWhereUniqueInput } from './lease-where-unique.input';
import { Type } from 'class-transformer';
import { LeaseUpdateWithoutTenantInput } from './lease-update-without-tenant.input';
import { LeaseCreateWithoutTenantInput } from './lease-create-without-tenant.input';

@InputType()
export class LeaseUpsertWithWhereUniqueWithoutTenantInput {

    @Field(() => LeaseWhereUniqueInput, {nullable:false})
    @Type(() => LeaseWhereUniqueInput)
    where!: Prisma.AtLeast<LeaseWhereUniqueInput, 'id'>;

    @Field(() => LeaseUpdateWithoutTenantInput, {nullable:false})
    @Type(() => LeaseUpdateWithoutTenantInput)
    update!: LeaseUpdateWithoutTenantInput;

    @Field(() => LeaseCreateWithoutTenantInput, {nullable:false})
    @Type(() => LeaseCreateWithoutTenantInput)
    create!: LeaseCreateWithoutTenantInput;
}
