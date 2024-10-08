import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LeaseWhereInput } from './lease-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyLeaseArgs {

    @Field(() => LeaseWhereInput, {nullable:true})
    @Type(() => LeaseWhereInput)
    where?: LeaseWhereInput;
}
