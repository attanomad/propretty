import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumLeaseStatusFilter } from '../prisma/enum-lease-status-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';

@InputType()
export class LeaseScalarWhereInput {

    @Field(() => [LeaseScalarWhereInput], {nullable:true})
    @Type(() => LeaseScalarWhereInput)
    AND?: Array<LeaseScalarWhereInput>;

    @Field(() => [LeaseScalarWhereInput], {nullable:true})
    @Type(() => LeaseScalarWhereInput)
    OR?: Array<LeaseScalarWhereInput>;

    @Field(() => [LeaseScalarWhereInput], {nullable:true})
    @Type(() => LeaseScalarWhereInput)
    NOT?: Array<LeaseScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    propertyId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    tenantId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    startedDate?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    endDate?: DateTimeFilter;

    @Field(() => EnumLeaseStatusFilter, {nullable:true})
    status?: EnumLeaseStatusFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    rentAmount?: DecimalFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    depositAmount?: DecimalFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
