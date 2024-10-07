import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PropertyUpdateManyMutationInput } from './property-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PropertyWhereInput } from './property-where.input';

@ArgsType()
export class UpdateManyPropertyArgs {

    @Field(() => PropertyUpdateManyMutationInput, {nullable:false})
    @Type(() => PropertyUpdateManyMutationInput)
    data!: PropertyUpdateManyMutationInput;

    @Field(() => PropertyWhereInput, {nullable:true})
    @Type(() => PropertyWhereInput)
    where?: PropertyWhereInput;
}
