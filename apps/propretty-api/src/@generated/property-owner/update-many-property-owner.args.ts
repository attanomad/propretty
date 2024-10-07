import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PropertyOwnerUpdateManyMutationInput } from './property-owner-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PropertyOwnerWhereInput } from './property-owner-where.input';

@ArgsType()
export class UpdateManyPropertyOwnerArgs {

    @Field(() => PropertyOwnerUpdateManyMutationInput, {nullable:false})
    @Type(() => PropertyOwnerUpdateManyMutationInput)
    data!: PropertyOwnerUpdateManyMutationInput;

    @Field(() => PropertyOwnerWhereInput, {nullable:true})
    @Type(() => PropertyOwnerWhereInput)
    where?: PropertyOwnerWhereInput;
}
