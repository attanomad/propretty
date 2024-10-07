import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class FileCount {

    @Field(() => Int, {nullable:false})
    Property?: number;
}
