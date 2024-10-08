import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { PropertyMaintenanceRequestStatus } from '../prisma/property-maintenance-request-status.enum';
import { PropertyMaintenanceRequest } from '../property-maintenance-request/property-maintenance-request.model';

@ObjectType()
export class PropertyMaintenanceRequestActivity {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    requestId!: string;

    @Field(() => PropertyMaintenanceRequestStatus, {nullable:false,defaultValue:'Pending'})
    status!: keyof typeof PropertyMaintenanceRequestStatus;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => PropertyMaintenanceRequest, {nullable:false})
    request?: PropertyMaintenanceRequest;
}
