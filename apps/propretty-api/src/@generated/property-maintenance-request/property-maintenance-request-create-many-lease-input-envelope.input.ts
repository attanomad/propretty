import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyMaintenanceRequestCreateManyLeaseInput } from './property-maintenance-request-create-many-lease.input';
import { Type } from 'class-transformer';

@InputType()
export class PropertyMaintenanceRequestCreateManyLeaseInputEnvelope {

    @Field(() => [PropertyMaintenanceRequestCreateManyLeaseInput], {nullable:false})
    @Type(() => PropertyMaintenanceRequestCreateManyLeaseInput)
    data!: Array<PropertyMaintenanceRequestCreateManyLeaseInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
