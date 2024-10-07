import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyAmenityCreateWithoutPropertiesInput } from './property-amenity-create-without-properties.input';
import { Type } from 'class-transformer';
import { PropertyAmenityCreateOrConnectWithoutPropertiesInput } from './property-amenity-create-or-connect-without-properties.input';
import { Prisma } from '@prisma/client';
import { PropertyAmenityWhereUniqueInput } from './property-amenity-where-unique.input';

@InputType()
export class PropertyAmenityUncheckedCreateNestedManyWithoutPropertiesInput {

    @Field(() => [PropertyAmenityCreateWithoutPropertiesInput], {nullable:true})
    @Type(() => PropertyAmenityCreateWithoutPropertiesInput)
    create?: Array<PropertyAmenityCreateWithoutPropertiesInput>;

    @Field(() => [PropertyAmenityCreateOrConnectWithoutPropertiesInput], {nullable:true})
    @Type(() => PropertyAmenityCreateOrConnectWithoutPropertiesInput)
    connectOrCreate?: Array<PropertyAmenityCreateOrConnectWithoutPropertiesInput>;

    @Field(() => [PropertyAmenityWhereUniqueInput], {nullable:true})
    @Type(() => PropertyAmenityWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PropertyAmenityWhereUniqueInput, 'id' | 'name'>>;
}
