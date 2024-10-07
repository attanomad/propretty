import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyWhereInput } from './property-where.input';
import { Type } from 'class-transformer';

@InputType()
export class PropertyRelationFilter {

    @Field(() => PropertyWhereInput, {nullable:true})
    @Type(() => PropertyWhereInput)
    is?: PropertyWhereInput;

    @Field(() => PropertyWhereInput, {nullable:true})
    @Type(() => PropertyWhereInput)
    isNot?: PropertyWhereInput;
}
