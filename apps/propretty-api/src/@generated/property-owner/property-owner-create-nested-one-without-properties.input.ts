import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyOwnerCreateWithoutPropertiesInput } from './property-owner-create-without-properties.input';
import { Type } from 'class-transformer';
import { PropertyOwnerCreateOrConnectWithoutPropertiesInput } from './property-owner-create-or-connect-without-properties.input';
import { Prisma } from '@prisma/client';
import { PropertyOwnerWhereUniqueInput } from './property-owner-where-unique.input';

@InputType()
export class PropertyOwnerCreateNestedOneWithoutPropertiesInput {

    @Field(() => PropertyOwnerCreateWithoutPropertiesInput, {nullable:true})
    @Type(() => PropertyOwnerCreateWithoutPropertiesInput)
    create?: PropertyOwnerCreateWithoutPropertiesInput;

    @Field(() => PropertyOwnerCreateOrConnectWithoutPropertiesInput, {nullable:true})
    @Type(() => PropertyOwnerCreateOrConnectWithoutPropertiesInput)
    connectOrCreate?: PropertyOwnerCreateOrConnectWithoutPropertiesInput;

    @Field(() => PropertyOwnerWhereUniqueInput, {nullable:true})
    @Type(() => PropertyOwnerWhereUniqueInput)
    connect?: Prisma.AtLeast<PropertyOwnerWhereUniqueInput, 'id'>;
}
