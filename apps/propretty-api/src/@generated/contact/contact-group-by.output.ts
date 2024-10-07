import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ContactCountAggregate } from './contact-count-aggregate.output';
import { ContactMinAggregate } from './contact-min-aggregate.output';
import { ContactMaxAggregate } from './contact-max-aggregate.output';

@ObjectType()
export class ContactGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => ContactCountAggregate, {nullable:true})
    _count?: ContactCountAggregate;

    @Field(() => ContactMinAggregate, {nullable:true})
    _min?: ContactMinAggregate;

    @Field(() => ContactMaxAggregate, {nullable:true})
    _max?: ContactMaxAggregate;
}
