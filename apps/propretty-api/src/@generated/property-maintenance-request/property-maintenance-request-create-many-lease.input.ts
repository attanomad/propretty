import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyMaintenanceRequestStatus } from '../prisma/property-maintenance-request-status.enum';

@InputType()
export class PropertyMaintenanceRequestCreateManyLeaseInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    propertyId!: string;

    @Field(() => String, {nullable:false})
    tenantId!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:false})
    requestedAt!: Date | string;

    @Field(() => PropertyMaintenanceRequestStatus, {nullable:true})
    status?: keyof typeof PropertyMaintenanceRequestStatus;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
