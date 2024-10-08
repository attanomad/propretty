import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TenantCountAggregate } from './tenant-count-aggregate.output';
import { TenantMinAggregate } from './tenant-min-aggregate.output';
import { TenantMaxAggregate } from './tenant-max-aggregate.output';

@ObjectType()
export class TenantGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    nationalId!: string;

    @Field(() => String, {nullable:true})
    firstName?: string;

    @Field(() => String, {nullable:true})
    lastName?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    phoneNumber?: string;

    @Field(() => Date, {nullable:true})
    dateOfBirth?: Date | string;

    @Field(() => String, {nullable:true})
    gender?: string;

    @Field(() => String, {nullable:true})
    address?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => TenantCountAggregate, {nullable:true})
    _count?: TenantCountAggregate;

    @Field(() => TenantMinAggregate, {nullable:true})
    _min?: TenantMinAggregate;

    @Field(() => TenantMaxAggregate, {nullable:true})
    _max?: TenantMaxAggregate;
}
