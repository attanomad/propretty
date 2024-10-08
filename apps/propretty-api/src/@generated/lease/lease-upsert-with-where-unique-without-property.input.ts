import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LeaseWhereUniqueInput } from './lease-where-unique.input';
import { Type } from 'class-transformer';
import { LeaseUpdateWithoutPropertyInput } from './lease-update-without-property.input';
import { LeaseCreateWithoutPropertyInput } from './lease-create-without-property.input';

@InputType()
export class LeaseUpsertWithWhereUniqueWithoutPropertyInput {

    @Field(() => LeaseWhereUniqueInput, {nullable:false})
    @Type(() => LeaseWhereUniqueInput)
    where!: Prisma.AtLeast<LeaseWhereUniqueInput, 'id'>;

    @Field(() => LeaseUpdateWithoutPropertyInput, {nullable:false})
    @Type(() => LeaseUpdateWithoutPropertyInput)
    update!: LeaseUpdateWithoutPropertyInput;

    @Field(() => LeaseCreateWithoutPropertyInput, {nullable:false})
    @Type(() => LeaseCreateWithoutPropertyInput)
    create!: LeaseCreateWithoutPropertyInput;
}
