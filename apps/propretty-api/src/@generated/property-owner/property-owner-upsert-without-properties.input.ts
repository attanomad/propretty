import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyOwnerUpdateWithoutPropertiesInput } from './property-owner-update-without-properties.input';
import { Type } from 'class-transformer';
import { PropertyOwnerCreateWithoutPropertiesInput } from './property-owner-create-without-properties.input';
import { PropertyOwnerWhereInput } from './property-owner-where.input';

@InputType()
export class PropertyOwnerUpsertWithoutPropertiesInput {

    @Field(() => PropertyOwnerUpdateWithoutPropertiesInput, {nullable:false})
    @Type(() => PropertyOwnerUpdateWithoutPropertiesInput)
    update!: PropertyOwnerUpdateWithoutPropertiesInput;

    @Field(() => PropertyOwnerCreateWithoutPropertiesInput, {nullable:false})
    @Type(() => PropertyOwnerCreateWithoutPropertiesInput)
    create!: PropertyOwnerCreateWithoutPropertiesInput;

    @Field(() => PropertyOwnerWhereInput, {nullable:true})
    @Type(() => PropertyOwnerWhereInput)
    where?: PropertyOwnerWhereInput;
}
