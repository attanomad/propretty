import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PropertyOwnerCreateInput } from './property-owner-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePropertyOwnerArgs {

    @Field(() => PropertyOwnerCreateInput, {nullable:false})
    @Type(() => PropertyOwnerCreateInput)
    data!: PropertyOwnerCreateInput;
}
