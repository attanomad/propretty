import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyStatus } from '../prisma/property-status.enum';
import { PropertyCommercialStatus } from '../prisma/property-commercial-status.enum';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { PropertyFurnishing } from '../prisma/property-furnishing.enum';

@InputType()
export class PropertyCreateManyLocationInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => PropertyStatus, {nullable:false})
    status!: keyof typeof PropertyStatus;

    @Field(() => PropertyCommercialStatus, {nullable:true})
    commercialStatus?: keyof typeof PropertyCommercialStatus;

    @Field(() => String, {nullable:true})
    uniqueCode?: string;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    floorSize?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    landSize?: Decimal;

    @Field(() => PropertyFurnishing, {nullable:true})
    furnishing?: keyof typeof PropertyFurnishing;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    typeId!: string;

    @Field(() => String, {nullable:true})
    propertyOwnerId?: string;
}
