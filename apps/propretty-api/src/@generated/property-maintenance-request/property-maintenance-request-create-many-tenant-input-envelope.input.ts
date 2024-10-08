import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyMaintenanceRequestCreateManyTenantInput } from './property-maintenance-request-create-many-tenant.input';
import { Type } from 'class-transformer';

@InputType()
export class PropertyMaintenanceRequestCreateManyTenantInputEnvelope {

    @Field(() => [PropertyMaintenanceRequestCreateManyTenantInput], {nullable:false})
    @Type(() => PropertyMaintenanceRequestCreateManyTenantInput)
    data!: Array<PropertyMaintenanceRequestCreateManyTenantInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
