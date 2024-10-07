import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PropertyTypeCreateInput } from './property-type-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePropertyTypeArgs {

    @Field(() => PropertyTypeCreateInput, {nullable:false})
    @Type(() => PropertyTypeCreateInput)
    data!: PropertyTypeCreateInput;
}
