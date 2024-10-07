import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PropertyOwnerWhereUniqueInput } from './property-owner-where-unique.input';
import { Type } from 'class-transformer';
import { PropertyOwnerCreateWithoutPropertiesInput } from './property-owner-create-without-properties.input';

@InputType()
export class PropertyOwnerCreateOrConnectWithoutPropertiesInput {

    @Field(() => PropertyOwnerWhereUniqueInput, {nullable:false})
    @Type(() => PropertyOwnerWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyOwnerWhereUniqueInput, 'id'>;

    @Field(() => PropertyOwnerCreateWithoutPropertiesInput, {nullable:false})
    @Type(() => PropertyOwnerCreateWithoutPropertiesInput)
    create!: PropertyOwnerCreateWithoutPropertiesInput;
}
