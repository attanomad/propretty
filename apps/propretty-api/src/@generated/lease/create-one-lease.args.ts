import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LeaseCreateInput } from './lease-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneLeaseArgs {

    @Field(() => LeaseCreateInput, {nullable:false})
    @Type(() => LeaseCreateInput)
    data!: LeaseCreateInput;
}
