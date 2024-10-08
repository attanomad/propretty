import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LeaseCreateManyInput } from './lease-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyLeaseArgs {

    @Field(() => [LeaseCreateManyInput], {nullable:false})
    @Type(() => LeaseCreateManyInput)
    data!: Array<LeaseCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
