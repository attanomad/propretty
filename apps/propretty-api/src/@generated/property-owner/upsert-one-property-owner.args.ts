import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PropertyOwnerWhereUniqueInput } from './property-owner-where-unique.input';
import { Type } from 'class-transformer';
import { PropertyOwnerCreateInput } from './property-owner-create.input';
import { PropertyOwnerUpdateInput } from './property-owner-update.input';

@ArgsType()
export class UpsertOnePropertyOwnerArgs {

    @Field(() => PropertyOwnerWhereUniqueInput, {nullable:false})
    @Type(() => PropertyOwnerWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyOwnerWhereUniqueInput, 'id'>;

    @Field(() => PropertyOwnerCreateInput, {nullable:false})
    @Type(() => PropertyOwnerCreateInput)
    create!: PropertyOwnerCreateInput;

    @Field(() => PropertyOwnerUpdateInput, {nullable:false})
    @Type(() => PropertyOwnerUpdateInput)
    update!: PropertyOwnerUpdateInput;
}
