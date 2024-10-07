import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PropertyOwnerWhereInput } from './property-owner-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyPropertyOwnerArgs {

    @Field(() => PropertyOwnerWhereInput, {nullable:true})
    @Type(() => PropertyOwnerWhereInput)
    where?: PropertyOwnerWhereInput;
}
