import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyMaintenanceRequestActivityCreateManyRequestInput } from './property-maintenance-request-activity-create-many-request.input';
import { Type } from 'class-transformer';

@InputType()
export class PropertyMaintenanceRequestActivityCreateManyRequestInputEnvelope {

    @Field(() => [PropertyMaintenanceRequestActivityCreateManyRequestInput], {nullable:false})
    @Type(() => PropertyMaintenanceRequestActivityCreateManyRequestInput)
    data!: Array<PropertyMaintenanceRequestActivityCreateManyRequestInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
