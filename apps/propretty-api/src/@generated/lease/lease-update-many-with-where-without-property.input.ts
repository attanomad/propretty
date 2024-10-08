import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LeaseScalarWhereInput } from './lease-scalar-where.input';
import { Type } from 'class-transformer';
import { LeaseUpdateManyMutationInput } from './lease-update-many-mutation.input';

@InputType()
export class LeaseUpdateManyWithWhereWithoutPropertyInput {

    @Field(() => LeaseScalarWhereInput, {nullable:false})
    @Type(() => LeaseScalarWhereInput)
    where!: LeaseScalarWhereInput;

    @Field(() => LeaseUpdateManyMutationInput, {nullable:false})
    @Type(() => LeaseUpdateManyMutationInput)
    data!: LeaseUpdateManyMutationInput;
}
