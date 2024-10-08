import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PropertyMaintenanceRequestWhereInput } from './property-maintenance-request-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyPropertyMaintenanceRequestArgs {

    @Field(() => PropertyMaintenanceRequestWhereInput, {nullable:true})
    @Type(() => PropertyMaintenanceRequestWhereInput)
    where?: PropertyMaintenanceRequestWhereInput;
}
