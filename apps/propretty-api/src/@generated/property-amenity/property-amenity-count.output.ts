import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PropertyAmenityCount {

    @Field(() => Int, {nullable:false})
    properties?: number;
}
