import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PropertyMaintenanceRequestCreateManyInput } from './property-maintenance-request-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPropertyMaintenanceRequestArgs {

    @Field(() => [PropertyMaintenanceRequestCreateManyInput], {nullable:false})
    @Type(() => PropertyMaintenanceRequestCreateManyInput)
    data!: Array<PropertyMaintenanceRequestCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
