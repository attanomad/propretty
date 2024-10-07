import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LocationCreateInput } from './location-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneLocationArgs {

    @Field(() => LocationCreateInput, {nullable:true})
    @Type(() => LocationCreateInput)
    data?: LocationCreateInput;
}
