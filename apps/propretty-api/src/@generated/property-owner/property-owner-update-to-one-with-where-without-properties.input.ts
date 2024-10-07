import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyOwnerWhereInput } from './property-owner-where.input';
import { Type } from 'class-transformer';
import { PropertyOwnerUpdateWithoutPropertiesInput } from './property-owner-update-without-properties.input';

@InputType()
export class PropertyOwnerUpdateToOneWithWhereWithoutPropertiesInput {

    @Field(() => PropertyOwnerWhereInput, {nullable:true})
    @Type(() => PropertyOwnerWhereInput)
    where?: PropertyOwnerWhereInput;

    @Field(() => PropertyOwnerUpdateWithoutPropertiesInput, {nullable:false})
    @Type(() => PropertyOwnerUpdateWithoutPropertiesInput)
    data!: PropertyOwnerUpdateWithoutPropertiesInput;
}
