import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PropertyTypeUpdateManyMutationInput } from './property-type-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PropertyTypeWhereInput } from './property-type-where.input';

@ArgsType()
export class UpdateManyPropertyTypeArgs {

    @Field(() => PropertyTypeUpdateManyMutationInput, {nullable:false})
    @Type(() => PropertyTypeUpdateManyMutationInput)
    data!: PropertyTypeUpdateManyMutationInput;

    @Field(() => PropertyTypeWhereInput, {nullable:true})
    @Type(() => PropertyTypeWhereInput)
    where?: PropertyTypeWhereInput;
}
