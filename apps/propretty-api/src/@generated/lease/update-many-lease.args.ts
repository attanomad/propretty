import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LeaseUpdateManyMutationInput } from './lease-update-many-mutation.input';
import { Type } from 'class-transformer';
import { LeaseWhereInput } from './lease-where.input';

@ArgsType()
export class UpdateManyLeaseArgs {

    @Field(() => LeaseUpdateManyMutationInput, {nullable:false})
    @Type(() => LeaseUpdateManyMutationInput)
    data!: LeaseUpdateManyMutationInput;

    @Field(() => LeaseWhereInput, {nullable:true})
    @Type(() => LeaseWhereInput)
    where?: LeaseWhereInput;
}
