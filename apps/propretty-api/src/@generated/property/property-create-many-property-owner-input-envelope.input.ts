import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyCreateManyPropertyOwnerInput } from './property-create-many-property-owner.input';
import { Type } from 'class-transformer';

@InputType()
export class PropertyCreateManyPropertyOwnerInputEnvelope {

    @Field(() => [PropertyCreateManyPropertyOwnerInput], {nullable:false})
    @Type(() => PropertyCreateManyPropertyOwnerInput)
    data!: Array<PropertyCreateManyPropertyOwnerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
