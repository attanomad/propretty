import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LeaseWhereInput } from './lease-where.input';
import { Type } from 'class-transformer';

@InputType()
export class LeaseRelationFilter {

    @Field(() => LeaseWhereInput, {nullable:true})
    @Type(() => LeaseWhereInput)
    is?: LeaseWhereInput;

    @Field(() => LeaseWhereInput, {nullable:true})
    @Type(() => LeaseWhereInput)
    isNot?: LeaseWhereInput;
}
