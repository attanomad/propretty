import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PropertyStatus } from '../prisma/property-status.enum';
import { PropertyCommercialStatus } from '../prisma/property-commercial-status.enum';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { PropertyFurnishing } from '../prisma/property-furnishing.enum';
import { PropertyCountAggregate } from './property-count-aggregate.output';
import { PropertyAvgAggregate } from './property-avg-aggregate.output';
import { PropertySumAggregate } from './property-sum-aggregate.output';
import { PropertyMinAggregate } from './property-min-aggregate.output';
import { PropertyMaxAggregate } from './property-max-aggregate.output';

@ObjectType()
export class PropertyGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => PropertyStatus, {nullable:false})
    status!: keyof typeof PropertyStatus;

    @Field(() => PropertyCommercialStatus, {nullable:false})
    commercialStatus!: keyof typeof PropertyCommercialStatus;

    @Field(() => String, {nullable:true})
    uniqueCode?: string;

    @Field(() => GraphQLDecimal, {nullable:true})
    floorSize?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    landSize?: Decimal;

    @Field(() => PropertyFurnishing, {nullable:true})
    furnishing?: keyof typeof PropertyFurnishing;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    typeId!: string;

    @Field(() => String, {nullable:true})
    locationId?: string;

    @Field(() => String, {nullable:true})
    propertyOwnerId?: string;

    @Field(() => PropertyCountAggregate, {nullable:true})
    _count?: PropertyCountAggregate;

    @Field(() => PropertyAvgAggregate, {nullable:true})
    _avg?: PropertyAvgAggregate;

    @Field(() => PropertySumAggregate, {nullable:true})
    _sum?: PropertySumAggregate;

    @Field(() => PropertyMinAggregate, {nullable:true})
    _min?: PropertyMinAggregate;

    @Field(() => PropertyMaxAggregate, {nullable:true})
    _max?: PropertyMaxAggregate;
}
