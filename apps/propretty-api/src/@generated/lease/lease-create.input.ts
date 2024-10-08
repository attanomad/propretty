import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LeaseStatus } from '../prisma/lease-status.enum';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { PropertyCreateNestedOneWithoutLeasesInput } from '../property/property-create-nested-one-without-leases.input';
import { TenantCreateNestedOneWithoutLeasesInput } from '../tenant/tenant-create-nested-one-without-leases.input';
import { PropertyMaintenanceRequestCreateNestedManyWithoutLeaseInput } from '../property-maintenance-request/property-maintenance-request-create-nested-many-without-lease.input';

@InputType()
export class LeaseCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:false})
    startedDate!: Date | string;

    @Field(() => Date, {nullable:false})
    endDate!: Date | string;

    @Field(() => LeaseStatus, {nullable:false})
    status!: keyof typeof LeaseStatus;

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    rentAmount!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    depositAmount!: Decimal;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PropertyCreateNestedOneWithoutLeasesInput, {nullable:false})
    @Type(() => PropertyCreateNestedOneWithoutLeasesInput)
    property!: PropertyCreateNestedOneWithoutLeasesInput;

    @Field(() => TenantCreateNestedOneWithoutLeasesInput, {nullable:false})
    @Type(() => TenantCreateNestedOneWithoutLeasesInput)
    tenant!: TenantCreateNestedOneWithoutLeasesInput;

    @Field(() => PropertyMaintenanceRequestCreateNestedManyWithoutLeaseInput, {nullable:true})
    @Type(() => PropertyMaintenanceRequestCreateNestedManyWithoutLeaseInput)
    maintenanceRequests?: PropertyMaintenanceRequestCreateNestedManyWithoutLeaseInput;
}
