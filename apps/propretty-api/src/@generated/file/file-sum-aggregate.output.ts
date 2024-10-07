import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class FileSumAggregate {

    @Field(() => String, {nullable:true})
    size?: bigint | number;
}
