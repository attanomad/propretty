import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class FileMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    path?: string;

    @Field(() => String, {nullable:true})
    mimetype?: string;

    @Field(() => String, {nullable:true})
    size?: bigint | number;
}
