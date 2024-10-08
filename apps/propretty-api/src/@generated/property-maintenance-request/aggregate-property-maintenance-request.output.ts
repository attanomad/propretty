import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PropertyMaintenanceRequestCountAggregate } from './property-maintenance-request-count-aggregate.output';
import { PropertyMaintenanceRequestMinAggregate } from './property-maintenance-request-min-aggregate.output';
import { PropertyMaintenanceRequestMaxAggregate } from './property-maintenance-request-max-aggregate.output';

@ObjectType()
export class AggregatePropertyMaintenanceRequest {

    @Field(() => PropertyMaintenanceRequestCountAggregate, {nullable:true})
    _count?: PropertyMaintenanceRequestCountAggregate;

    @Field(() => PropertyMaintenanceRequestMinAggregate, {nullable:true})
    _min?: PropertyMaintenanceRequestMinAggregate;

    @Field(() => PropertyMaintenanceRequestMaxAggregate, {nullable:true})
    _max?: PropertyMaintenanceRequestMaxAggregate;
}
