import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { EnumLeaseStatusWithAggregatesFilter } from '../prisma/enum-lease-status-with-aggregates-filter.input';
import { DecimalWithAggregatesFilter } from '../prisma/decimal-with-aggregates-filter.input';

@InputType()
export class LeaseScalarWhereWithAggregatesInput {

    @Field(() => [LeaseScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => LeaseScalarWhereWithAggregatesInput)
    AND?: Array<LeaseScalarWhereWithAggregatesInput>;

    @Field(() => [LeaseScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => LeaseScalarWhereWithAggregatesInput)
    OR?: Array<LeaseScalarWhereWithAggregatesInput>;

    @Field(() => [LeaseScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => LeaseScalarWhereWithAggregatesInput)
    NOT?: Array<LeaseScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    propertyId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    tenantId?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    startedDate?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    endDate?: DateTimeWithAggregatesFilter;

    @Field(() => EnumLeaseStatusWithAggregatesFilter, {nullable:true})
    status?: EnumLeaseStatusWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    rentAmount?: DecimalWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    depositAmount?: DecimalWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
