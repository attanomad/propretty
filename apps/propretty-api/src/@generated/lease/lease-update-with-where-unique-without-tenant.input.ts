import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LeaseWhereUniqueInput } from './lease-where-unique.input';
import { Type } from 'class-transformer';
import { LeaseUpdateWithoutTenantInput } from './lease-update-without-tenant.input';

@InputType()
export class LeaseUpdateWithWhereUniqueWithoutTenantInput {

    @Field(() => LeaseWhereUniqueInput, {nullable:false})
    @Type(() => LeaseWhereUniqueInput)
    where!: Prisma.AtLeast<LeaseWhereUniqueInput, 'id'>;

    @Field(() => LeaseUpdateWithoutTenantInput, {nullable:false})
    @Type(() => LeaseUpdateWithoutTenantInput)
    data!: LeaseUpdateWithoutTenantInput;
}
