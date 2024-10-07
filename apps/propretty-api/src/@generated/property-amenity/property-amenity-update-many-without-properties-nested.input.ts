import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyAmenityCreateWithoutPropertiesInput } from './property-amenity-create-without-properties.input';
import { Type } from 'class-transformer';
import { PropertyAmenityCreateOrConnectWithoutPropertiesInput } from './property-amenity-create-or-connect-without-properties.input';
import { PropertyAmenityUpsertWithWhereUniqueWithoutPropertiesInput } from './property-amenity-upsert-with-where-unique-without-properties.input';
import { Prisma } from '@prisma/client';
import { PropertyAmenityWhereUniqueInput } from './property-amenity-where-unique.input';
import { PropertyAmenityUpdateWithWhereUniqueWithoutPropertiesInput } from './property-amenity-update-with-where-unique-without-properties.input';
import { PropertyAmenityUpdateManyWithWhereWithoutPropertiesInput } from './property-amenity-update-many-with-where-without-properties.input';
import { PropertyAmenityScalarWhereInput } from './property-amenity-scalar-where.input';

@InputType()
export class PropertyAmenityUpdateManyWithoutPropertiesNestedInput {

    @Field(() => [PropertyAmenityCreateWithoutPropertiesInput], {nullable:true})
    @Type(() => PropertyAmenityCreateWithoutPropertiesInput)
    create?: Array<PropertyAmenityCreateWithoutPropertiesInput>;

    @Field(() => [PropertyAmenityCreateOrConnectWithoutPropertiesInput], {nullable:true})
    @Type(() => PropertyAmenityCreateOrConnectWithoutPropertiesInput)
    connectOrCreate?: Array<PropertyAmenityCreateOrConnectWithoutPropertiesInput>;

    @Field(() => [PropertyAmenityUpsertWithWhereUniqueWithoutPropertiesInput], {nullable:true})
    @Type(() => PropertyAmenityUpsertWithWhereUniqueWithoutPropertiesInput)
    upsert?: Array<PropertyAmenityUpsertWithWhereUniqueWithoutPropertiesInput>;

    @Field(() => [PropertyAmenityWhereUniqueInput], {nullable:true})
    @Type(() => PropertyAmenityWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PropertyAmenityWhereUniqueInput, 'id' | 'name'>>;

    @Field(() => [PropertyAmenityWhereUniqueInput], {nullable:true})
    @Type(() => PropertyAmenityWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PropertyAmenityWhereUniqueInput, 'id' | 'name'>>;

    @Field(() => [PropertyAmenityWhereUniqueInput], {nullable:true})
    @Type(() => PropertyAmenityWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PropertyAmenityWhereUniqueInput, 'id' | 'name'>>;

    @Field(() => [PropertyAmenityWhereUniqueInput], {nullable:true})
    @Type(() => PropertyAmenityWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PropertyAmenityWhereUniqueInput, 'id' | 'name'>>;

    @Field(() => [PropertyAmenityUpdateWithWhereUniqueWithoutPropertiesInput], {nullable:true})
    @Type(() => PropertyAmenityUpdateWithWhereUniqueWithoutPropertiesInput)
    update?: Array<PropertyAmenityUpdateWithWhereUniqueWithoutPropertiesInput>;

    @Field(() => [PropertyAmenityUpdateManyWithWhereWithoutPropertiesInput], {nullable:true})
    @Type(() => PropertyAmenityUpdateManyWithWhereWithoutPropertiesInput)
    updateMany?: Array<PropertyAmenityUpdateManyWithWhereWithoutPropertiesInput>;

    @Field(() => [PropertyAmenityScalarWhereInput], {nullable:true})
    @Type(() => PropertyAmenityScalarWhereInput)
    deleteMany?: Array<PropertyAmenityScalarWhereInput>;
}
