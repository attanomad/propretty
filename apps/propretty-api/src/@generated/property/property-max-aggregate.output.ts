import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PropertyStatus } from '../prisma/property-status.enum';
import { PropertyCommercialStatus } from '../prisma/property-commercial-status.enum';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { PropertyFurnishing } from '../prisma/property-furnishing.enum';

@ObjectType()
export class PropertyMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => PropertyStatus, {nullable:true})
    status?: keyof typeof PropertyStatus;

    @Field(() => PropertyCommercialStatus, {nullable:true})
    commercialStatus?: keyof typeof PropertyCommercialStatus;

    @Field(() => String, {nullable:true})
    uniqueCode?: string;

    @Field(() => GraphQLDecimal, {nullable:true})
    floorSize?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    landSize?: Decimal;

    @Field(() => PropertyFurnishing, {nullable:true})
    furnishing?: keyof typeof PropertyFurnishing;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    typeId?: string;

    @Field(() => String, {nullable:true})
    locationId?: string;

    @Field(() => String, {nullable:true})
    propertyOwnerId?: string;
}
