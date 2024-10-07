import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationWhereInput } from './location-where.input';
import { Type } from 'class-transformer';

@InputType()
export class LocationNullableRelationFilter {

    @Field(() => LocationWhereInput, {nullable:true})
    @Type(() => LocationWhereInput)
    is?: LocationWhereInput;

    @Field(() => LocationWhereInput, {nullable:true})
    @Type(() => LocationWhereInput)
    isNot?: LocationWhereInput;
}
