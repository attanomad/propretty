import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LeaseWhereUniqueInput } from './lease-where-unique.input';
import { Type } from 'class-transformer';
import { LeaseCreateInput } from './lease-create.input';
import { LeaseUpdateInput } from './lease-update.input';

@ArgsType()
export class UpsertOneLeaseArgs {

    @Field(() => LeaseWhereUniqueInput, {nullable:false})
    @Type(() => LeaseWhereUniqueInput)
    where!: Prisma.AtLeast<LeaseWhereUniqueInput, 'id'>;

    @Field(() => LeaseCreateInput, {nullable:false})
    @Type(() => LeaseCreateInput)
    create!: LeaseCreateInput;

    @Field(() => LeaseUpdateInput, {nullable:false})
    @Type(() => LeaseUpdateInput)
    update!: LeaseUpdateInput;
}
