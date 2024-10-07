import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyTypeCreateWithoutPropertyInput } from './property-type-create-without-property.input';
import { Type } from 'class-transformer';
import { PropertyTypeCreateOrConnectWithoutPropertyInput } from './property-type-create-or-connect-without-property.input';
import { PropertyTypeUpsertWithoutPropertyInput } from './property-type-upsert-without-property.input';
import { Prisma } from '@prisma/client';
import { PropertyTypeWhereUniqueInput } from './property-type-where-unique.input';
import { PropertyTypeUpdateToOneWithWhereWithoutPropertyInput } from './property-type-update-to-one-with-where-without-property.input';

@InputType()
export class PropertyTypeUpdateOneRequiredWithoutPropertyNestedInput {

    @Field(() => PropertyTypeCreateWithoutPropertyInput, {nullable:true})
    @Type(() => PropertyTypeCreateWithoutPropertyInput)
    create?: PropertyTypeCreateWithoutPropertyInput;

    @Field(() => PropertyTypeCreateOrConnectWithoutPropertyInput, {nullable:true})
    @Type(() => PropertyTypeCreateOrConnectWithoutPropertyInput)
    connectOrCreate?: PropertyTypeCreateOrConnectWithoutPropertyInput;

    @Field(() => PropertyTypeUpsertWithoutPropertyInput, {nullable:true})
    @Type(() => PropertyTypeUpsertWithoutPropertyInput)
    upsert?: PropertyTypeUpsertWithoutPropertyInput;

    @Field(() => PropertyTypeWhereUniqueInput, {nullable:true})
    @Type(() => PropertyTypeWhereUniqueInput)
    connect?: Prisma.AtLeast<PropertyTypeWhereUniqueInput, 'id' | 'name'>;

    @Field(() => PropertyTypeUpdateToOneWithWhereWithoutPropertyInput, {nullable:true})
    @Type(() => PropertyTypeUpdateToOneWithWhereWithoutPropertyInput)
    update?: PropertyTypeUpdateToOneWithWhereWithoutPropertyInput;
}
