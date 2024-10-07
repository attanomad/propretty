import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyCreateManyTypeInput } from './property-create-many-type.input';
import { Type } from 'class-transformer';

@InputType()
export class PropertyCreateManyTypeInputEnvelope {

    @Field(() => [PropertyCreateManyTypeInput], {nullable:false})
    @Type(() => PropertyCreateManyTypeInput)
    data!: Array<PropertyCreateManyTypeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
