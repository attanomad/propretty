import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PropertyCreateInput } from './property-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePropertyArgs {

    @Field(() => PropertyCreateInput, {nullable:false})
    @Type(() => PropertyCreateInput)
    data!: PropertyCreateInput;
}
