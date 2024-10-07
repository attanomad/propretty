import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Property } from '../property/property.model';
import { FileCount } from './file-count.output';

@ObjectType()
export class File {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    path!: string;

    @Field(() => String, {nullable:false})
    mimetype!: string;

    @Field(() => String, {nullable:false})
    size!: bigint;

    @Field(() => [Property], {nullable:true})
    Property?: Array<Property>;

    @Field(() => FileCount, {nullable:false})
    _count?: FileCount;
}
