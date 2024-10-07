import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Property } from '../property/property.model';
import { PropertyTypeCount } from './property-type-count.output';

@ObjectType()
export class PropertyType {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => [Property], {nullable:true})
    Property?: Array<Property>;

    @Field(() => PropertyTypeCount, {nullable:false})
    _count?: PropertyTypeCount;
}
