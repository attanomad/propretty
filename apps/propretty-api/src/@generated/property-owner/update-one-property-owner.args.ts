import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PropertyOwnerUpdateInput } from './property-owner-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PropertyOwnerWhereUniqueInput } from './property-owner-where-unique.input';

@ArgsType()
export class UpdateOnePropertyOwnerArgs {

    @Field(() => PropertyOwnerUpdateInput, {nullable:false})
    @Type(() => PropertyOwnerUpdateInput)
    data!: PropertyOwnerUpdateInput;

    @Field(() => PropertyOwnerWhereUniqueInput, {nullable:false})
    @Type(() => PropertyOwnerWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyOwnerWhereUniqueInput, 'id'>;
}
