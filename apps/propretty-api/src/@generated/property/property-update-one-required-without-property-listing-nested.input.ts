import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyCreateWithoutPropertyListingInput } from './property-create-without-property-listing.input';
import { Type } from 'class-transformer';
import { PropertyCreateOrConnectWithoutPropertyListingInput } from './property-create-or-connect-without-property-listing.input';
import { PropertyUpsertWithoutPropertyListingInput } from './property-upsert-without-property-listing.input';
import { Prisma } from '@prisma/client';
import { PropertyWhereUniqueInput } from './property-where-unique.input';
import { PropertyUpdateToOneWithWhereWithoutPropertyListingInput } from './property-update-to-one-with-where-without-property-listing.input';

@InputType()
export class PropertyUpdateOneRequiredWithoutPropertyListingNestedInput {

    @Field(() => PropertyCreateWithoutPropertyListingInput, {nullable:true})
    @Type(() => PropertyCreateWithoutPropertyListingInput)
    create?: PropertyCreateWithoutPropertyListingInput;

    @Field(() => PropertyCreateOrConnectWithoutPropertyListingInput, {nullable:true})
    @Type(() => PropertyCreateOrConnectWithoutPropertyListingInput)
    connectOrCreate?: PropertyCreateOrConnectWithoutPropertyListingInput;

    @Field(() => PropertyUpsertWithoutPropertyListingInput, {nullable:true})
    @Type(() => PropertyUpsertWithoutPropertyListingInput)
    upsert?: PropertyUpsertWithoutPropertyListingInput;

    @Field(() => PropertyWhereUniqueInput, {nullable:true})
    @Type(() => PropertyWhereUniqueInput)
    connect?: Prisma.AtLeast<PropertyWhereUniqueInput, 'id' | 'uniqueCode'>;

    @Field(() => PropertyUpdateToOneWithWhereWithoutPropertyListingInput, {nullable:true})
    @Type(() => PropertyUpdateToOneWithWhereWithoutPropertyListingInput)
    update?: PropertyUpdateToOneWithWhereWithoutPropertyListingInput;
}
