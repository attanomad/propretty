import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LeaseStatus } from '../prisma/lease-status.enum';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { LeaseCountAggregate } from './lease-count-aggregate.output';
import { LeaseAvgAggregate } from './lease-avg-aggregate.output';
import { LeaseSumAggregate } from './lease-sum-aggregate.output';
import { LeaseMinAggregate } from './lease-min-aggregate.output';
import { LeaseMaxAggregate } from './lease-max-aggregate.output';

@ObjectType()
export class LeaseGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    propertyId!: string;

    @Field(() => String, {nullable:false})
    tenantId!: string;

    @Field(() => Date, {nullable:false})
    startedDate!: Date | string;

    @Field(() => Date, {nullable:false})
    endDate!: Date | string;

    @Field(() => LeaseStatus, {nullable:false})
    status!: keyof typeof LeaseStatus;

    @Field(() => GraphQLDecimal, {nullable:false})
    rentAmount!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false})
    depositAmount!: Decimal;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => LeaseCountAggregate, {nullable:true})
    _count?: LeaseCountAggregate;

    @Field(() => LeaseAvgAggregate, {nullable:true})
    _avg?: LeaseAvgAggregate;

    @Field(() => LeaseSumAggregate, {nullable:true})
    _sum?: LeaseSumAggregate;

    @Field(() => LeaseMinAggregate, {nullable:true})
    _min?: LeaseMinAggregate;

    @Field(() => LeaseMaxAggregate, {nullable:true})
    _max?: LeaseMaxAggregate;
}
