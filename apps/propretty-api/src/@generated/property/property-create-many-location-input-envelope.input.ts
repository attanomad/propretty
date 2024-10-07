import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyCreateManyLocationInput } from './property-create-many-location.input';
import { Type } from 'class-transformer';

@InputType()
export class PropertyCreateManyLocationInputEnvelope {

    @Field(() => [PropertyCreateManyLocationInput], {nullable:false})
    @Type(() => PropertyCreateManyLocationInput)
    data!: Array<PropertyCreateManyLocationInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
