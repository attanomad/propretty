import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LeaseCreateManyPropertyInput } from './lease-create-many-property.input';
import { Type } from 'class-transformer';

@InputType()
export class LeaseCreateManyPropertyInputEnvelope {

    @Field(() => [LeaseCreateManyPropertyInput], {nullable:false})
    @Type(() => LeaseCreateManyPropertyInput)
    data!: Array<LeaseCreateManyPropertyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
