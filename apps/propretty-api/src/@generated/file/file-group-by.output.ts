import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FileCountAggregate } from './file-count-aggregate.output';
import { FileAvgAggregate } from './file-avg-aggregate.output';
import { FileSumAggregate } from './file-sum-aggregate.output';
import { FileMinAggregate } from './file-min-aggregate.output';
import { FileMaxAggregate } from './file-max-aggregate.output';

@ObjectType()
export class FileGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    path!: string;

    @Field(() => String, {nullable:false})
    mimetype!: string;

    @Field(() => String, {nullable:false})
    size!: bigint | number;

    @Field(() => FileCountAggregate, {nullable:true})
    _count?: FileCountAggregate;

    @Field(() => FileAvgAggregate, {nullable:true})
    _avg?: FileAvgAggregate;

    @Field(() => FileSumAggregate, {nullable:true})
    _sum?: FileSumAggregate;

    @Field(() => FileMinAggregate, {nullable:true})
    _min?: FileMinAggregate;

    @Field(() => FileMaxAggregate, {nullable:true})
    _max?: FileMaxAggregate;
}
