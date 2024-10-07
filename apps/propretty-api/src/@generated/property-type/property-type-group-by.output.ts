import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PropertyTypeCountAggregate } from './property-type-count-aggregate.output';
import { PropertyTypeMinAggregate } from './property-type-min-aggregate.output';
import { PropertyTypeMaxAggregate } from './property-type-max-aggregate.output';

@ObjectType()
export class PropertyTypeGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => PropertyTypeCountAggregate, {nullable:true})
    _count?: PropertyTypeCountAggregate;

    @Field(() => PropertyTypeMinAggregate, {nullable:true})
    _min?: PropertyTypeMinAggregate;

    @Field(() => PropertyTypeMaxAggregate, {nullable:true})
    _max?: PropertyTypeMaxAggregate;
}
