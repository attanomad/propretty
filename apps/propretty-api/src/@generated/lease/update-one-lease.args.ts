import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LeaseUpdateInput } from './lease-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { LeaseWhereUniqueInput } from './lease-where-unique.input';

@ArgsType()
export class UpdateOneLeaseArgs {

    @Field(() => LeaseUpdateInput, {nullable:false})
    @Type(() => LeaseUpdateInput)
    data!: LeaseUpdateInput;

    @Field(() => LeaseWhereUniqueInput, {nullable:false})
    @Type(() => LeaseWhereUniqueInput)
    where!: Prisma.AtLeast<LeaseWhereUniqueInput, 'id'>;
}
