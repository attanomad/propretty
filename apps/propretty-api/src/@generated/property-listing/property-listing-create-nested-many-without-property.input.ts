import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyListingCreateWithoutPropertyInput } from './property-listing-create-without-property.input';
import { Type } from 'class-transformer';
import { PropertyListingCreateOrConnectWithoutPropertyInput } from './property-listing-create-or-connect-without-property.input';
import { PropertyListingCreateManyPropertyInputEnvelope } from './property-listing-create-many-property-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PropertyListingWhereUniqueInput } from './property-listing-where-unique.input';

@InputType()
export class PropertyListingCreateNestedManyWithoutPropertyInput {

    @Field(() => [PropertyListingCreateWithoutPropertyInput], {nullable:true})
    @Type(() => PropertyListingCreateWithoutPropertyInput)
    create?: Array<PropertyListingCreateWithoutPropertyInput>;

    @Field(() => [PropertyListingCreateOrConnectWithoutPropertyInput], {nullable:true})
    @Type(() => PropertyListingCreateOrConnectWithoutPropertyInput)
    connectOrCreate?: Array<PropertyListingCreateOrConnectWithoutPropertyInput>;

    @Field(() => PropertyListingCreateManyPropertyInputEnvelope, {nullable:true})
    @Type(() => PropertyListingCreateManyPropertyInputEnvelope)
    createMany?: PropertyListingCreateManyPropertyInputEnvelope;

    @Field(() => [PropertyListingWhereUniqueInput], {nullable:true})
    @Type(() => PropertyListingWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PropertyListingWhereUniqueInput, 'id'>>;
}
