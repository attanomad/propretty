import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PropertyAmenityCountAggregate } from './property-amenity-count-aggregate.output';
import { PropertyAmenityMinAggregate } from './property-amenity-min-aggregate.output';
import { PropertyAmenityMaxAggregate } from './property-amenity-max-aggregate.output';

@ObjectType()
export class PropertyAmenityGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => PropertyAmenityCountAggregate, {nullable:true})
    _count?: PropertyAmenityCountAggregate;

    @Field(() => PropertyAmenityMinAggregate, {nullable:true})
    _min?: PropertyAmenityMinAggregate;

    @Field(() => PropertyAmenityMaxAggregate, {nullable:true})
    _max?: PropertyAmenityMaxAggregate;
}
