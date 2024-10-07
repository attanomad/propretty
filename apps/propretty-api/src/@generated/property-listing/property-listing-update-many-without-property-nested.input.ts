import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyListingCreateWithoutPropertyInput } from './property-listing-create-without-property.input';
import { Type } from 'class-transformer';
import { PropertyListingCreateOrConnectWithoutPropertyInput } from './property-listing-create-or-connect-without-property.input';
import { PropertyListingUpsertWithWhereUniqueWithoutPropertyInput } from './property-listing-upsert-with-where-unique-without-property.input';
import { PropertyListingCreateManyPropertyInputEnvelope } from './property-listing-create-many-property-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PropertyListingWhereUniqueInput } from './property-listing-where-unique.input';
import { PropertyListingUpdateWithWhereUniqueWithoutPropertyInput } from './property-listing-update-with-where-unique-without-property.input';
import { PropertyListingUpdateManyWithWhereWithoutPropertyInput } from './property-listing-update-many-with-where-without-property.input';
import { PropertyListingScalarWhereInput } from './property-listing-scalar-where.input';

@InputType()
export class PropertyListingUpdateManyWithoutPropertyNestedInput {

    @Field(() => [PropertyListingCreateWithoutPropertyInput], {nullable:true})
    @Type(() => PropertyListingCreateWithoutPropertyInput)
    create?: Array<PropertyListingCreateWithoutPropertyInput>;

    @Field(() => [PropertyListingCreateOrConnectWithoutPropertyInput], {nullable:true})
    @Type(() => PropertyListingCreateOrConnectWithoutPropertyInput)
    connectOrCreate?: Array<PropertyListingCreateOrConnectWithoutPropertyInput>;

    @Field(() => [PropertyListingUpsertWithWhereUniqueWithoutPropertyInput], {nullable:true})
    @Type(() => PropertyListingUpsertWithWhereUniqueWithoutPropertyInput)
    upsert?: Array<PropertyListingUpsertWithWhereUniqueWithoutPropertyInput>;

    @Field(() => PropertyListingCreateManyPropertyInputEnvelope, {nullable:true})
    @Type(() => PropertyListingCreateManyPropertyInputEnvelope)
    createMany?: PropertyListingCreateManyPropertyInputEnvelope;

    @Field(() => [PropertyListingWhereUniqueInput], {nullable:true})
    @Type(() => PropertyListingWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PropertyListingWhereUniqueInput, 'id'>>;

    @Field(() => [PropertyListingWhereUniqueInput], {nullable:true})
    @Type(() => PropertyListingWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PropertyListingWhereUniqueInput, 'id'>>;

    @Field(() => [PropertyListingWhereUniqueInput], {nullable:true})
    @Type(() => PropertyListingWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PropertyListingWhereUniqueInput, 'id'>>;

    @Field(() => [PropertyListingWhereUniqueInput], {nullable:true})
    @Type(() => PropertyListingWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PropertyListingWhereUniqueInput, 'id'>>;

    @Field(() => [PropertyListingUpdateWithWhereUniqueWithoutPropertyInput], {nullable:true})
    @Type(() => PropertyListingUpdateWithWhereUniqueWithoutPropertyInput)
    update?: Array<PropertyListingUpdateWithWhereUniqueWithoutPropertyInput>;

    @Field(() => [PropertyListingUpdateManyWithWhereWithoutPropertyInput], {nullable:true})
    @Type(() => PropertyListingUpdateManyWithWhereWithoutPropertyInput)
    updateMany?: Array<PropertyListingUpdateManyWithWhereWithoutPropertyInput>;

    @Field(() => [PropertyListingScalarWhereInput], {nullable:true})
    @Type(() => PropertyListingScalarWhereInput)
    deleteMany?: Array<PropertyListingScalarWhereInput>;
}
