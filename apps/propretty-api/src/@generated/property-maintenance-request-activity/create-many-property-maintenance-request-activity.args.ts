import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PropertyMaintenanceRequestActivityCreateManyInput } from './property-maintenance-request-activity-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPropertyMaintenanceRequestActivityArgs {

    @Field(() => [PropertyMaintenanceRequestActivityCreateManyInput], {nullable:false})
    @Type(() => PropertyMaintenanceRequestActivityCreateManyInput)
    data!: Array<PropertyMaintenanceRequestActivityCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
