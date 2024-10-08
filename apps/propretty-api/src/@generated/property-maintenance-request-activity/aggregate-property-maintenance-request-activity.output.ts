import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PropertyMaintenanceRequestActivityCountAggregate } from './property-maintenance-request-activity-count-aggregate.output';
import { PropertyMaintenanceRequestActivityMinAggregate } from './property-maintenance-request-activity-min-aggregate.output';
import { PropertyMaintenanceRequestActivityMaxAggregate } from './property-maintenance-request-activity-max-aggregate.output';

@ObjectType()
export class AggregatePropertyMaintenanceRequestActivity {

    @Field(() => PropertyMaintenanceRequestActivityCountAggregate, {nullable:true})
    _count?: PropertyMaintenanceRequestActivityCountAggregate;

    @Field(() => PropertyMaintenanceRequestActivityMinAggregate, {nullable:true})
    _min?: PropertyMaintenanceRequestActivityMinAggregate;

    @Field(() => PropertyMaintenanceRequestActivityMaxAggregate, {nullable:true})
    _max?: PropertyMaintenanceRequestActivityMaxAggregate;
}
