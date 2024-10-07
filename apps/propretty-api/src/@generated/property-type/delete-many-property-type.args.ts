import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PropertyTypeWhereInput } from './property-type-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyPropertyTypeArgs {

    @Field(() => PropertyTypeWhereInput, {nullable:true})
    @Type(() => PropertyTypeWhereInput)
    where?: PropertyTypeWhereInput;
}
