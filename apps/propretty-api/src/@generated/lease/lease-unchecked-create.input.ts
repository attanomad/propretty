import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LeaseStatus } from '../prisma/lease-status.enum';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { PropertyMaintenanceRequestUncheckedCreateNestedManyWithoutLeaseInput } from '../property-maintenance-request/property-maintenance-request-unchecked-create-nested-many-without-lease.input';

@InputType()
export class LeaseUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    propertyId!: string;

    @Field(() => String, {nullable:false})
    tenantId!: string;

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

    @Field(() => PropertyMaintenanceRequestUncheckedCreateNestedManyWithoutLeaseInput, {nullable:true})
    @Type(() => PropertyMaintenanceRequestUncheckedCreateNestedManyWithoutLeaseInput)
    maintenanceRequests?: PropertyMaintenanceRequestUncheckedCreateNestedManyWithoutLeaseInput;
}
