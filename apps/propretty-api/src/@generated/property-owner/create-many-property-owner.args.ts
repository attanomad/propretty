import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PropertyOwnerCreateManyInput } from './property-owner-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPropertyOwnerArgs {

    @Field(() => [PropertyOwnerCreateManyInput], {nullable:false})
    @Type(() => PropertyOwnerCreateManyInput)
    data!: Array<PropertyOwnerCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
