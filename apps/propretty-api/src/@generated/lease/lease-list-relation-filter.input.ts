import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LeaseWhereInput } from './lease-where.input';
import { Type } from 'class-transformer';

@InputType()
export class LeaseListRelationFilter {

    @Field(() => LeaseWhereInput, {nullable:true})
    @Type(() => LeaseWhereInput)
    every?: LeaseWhereInput;

    @Field(() => LeaseWhereInput, {nullable:true})
    @Type(() => LeaseWhereInput)
    some?: LeaseWhereInput;

    @Field(() => LeaseWhereInput, {nullable:true})
    @Type(() => LeaseWhereInput)
    none?: LeaseWhereInput;
}
