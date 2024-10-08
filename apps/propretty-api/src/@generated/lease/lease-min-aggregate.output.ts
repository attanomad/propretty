import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LeaseStatus } from '../prisma/lease-status.enum';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class LeaseMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    propertyId?: string;

    @Field(() => String, {nullable:true})
    tenantId?: string;

    @Field(() => Date, {nullable:true})
    startedDate?: Date | string;

    @Field(() => Date, {nullable:true})
    endDate?: Date | string;

    @Field(() => LeaseStatus, {nullable:true})
    status?: keyof typeof LeaseStatus;

    @Field(() => GraphQLDecimal, {nullable:true})
    rentAmount?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    depositAmount?: Decimal;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
