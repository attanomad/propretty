import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyMaintenanceRequestStatus } from '../prisma/property-maintenance-request-status.enum';

@InputType()
export class PropertyMaintenanceRequestActivityCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    requestId!: string;

    @Field(() => PropertyMaintenanceRequestStatus, {nullable:true})
    status?: keyof typeof PropertyMaintenanceRequestStatus;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
