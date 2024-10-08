import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LeaseCreateManyTenantInput } from './lease-create-many-tenant.input';
import { Type } from 'class-transformer';

@InputType()
export class LeaseCreateManyTenantInputEnvelope {

    @Field(() => [LeaseCreateManyTenantInput], {nullable:false})
    @Type(() => LeaseCreateManyTenantInput)
    data!: Array<LeaseCreateManyTenantInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
