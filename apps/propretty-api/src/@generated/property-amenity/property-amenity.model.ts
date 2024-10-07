import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Property } from '../property/property.model';
import { PropertyAmenityCount } from './property-amenity-count.output';

@ObjectType()
export class PropertyAmenity {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Property], {nullable:true})
    properties?: Array<Property>;

    @Field(() => PropertyAmenityCount, {nullable:false})
    _count?: PropertyAmenityCount;
}
