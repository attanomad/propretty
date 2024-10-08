import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LeaseWhereUniqueInput } from './lease-where-unique.input';
import { Type } from 'class-transformer';
import { LeaseCreateWithoutPropertyInput } from './lease-create-without-property.input';

@InputType()
export class LeaseCreateOrConnectWithoutPropertyInput {

    @Field(() => LeaseWhereUniqueInput, {nullable:false})
    @Type(() => LeaseWhereUniqueInput)
    where!: Prisma.AtLeast<LeaseWhereUniqueInput, 'id'>;

    @Field(() => LeaseCreateWithoutPropertyInput, {nullable:false})
    @Type(() => LeaseCreateWithoutPropertyInput)
    create!: LeaseCreateWithoutPropertyInput;
}
