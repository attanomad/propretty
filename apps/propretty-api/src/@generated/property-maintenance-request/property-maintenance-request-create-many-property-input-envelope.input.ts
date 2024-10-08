import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyMaintenanceRequestCreateManyPropertyInput } from './property-maintenance-request-create-many-property.input';
import { Type } from 'class-transformer';

@InputType()
export class PropertyMaintenanceRequestCreateManyPropertyInputEnvelope {

    @Field(() => [PropertyMaintenanceRequestCreateManyPropertyInput], {nullable:false})
    @Type(() => PropertyMaintenanceRequestCreateManyPropertyInput)
    data!: Array<PropertyMaintenanceRequestCreateManyPropertyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
