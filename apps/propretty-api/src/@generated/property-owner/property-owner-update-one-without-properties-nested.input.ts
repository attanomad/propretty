import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyOwnerCreateWithoutPropertiesInput } from './property-owner-create-without-properties.input';
import { Type } from 'class-transformer';
import { PropertyOwnerCreateOrConnectWithoutPropertiesInput } from './property-owner-create-or-connect-without-properties.input';
import { PropertyOwnerUpsertWithoutPropertiesInput } from './property-owner-upsert-without-properties.input';
import { PropertyOwnerWhereInput } from './property-owner-where.input';
import { Prisma } from '@prisma/client';
import { PropertyOwnerWhereUniqueInput } from './property-owner-where-unique.input';
import { PropertyOwnerUpdateToOneWithWhereWithoutPropertiesInput } from './property-owner-update-to-one-with-where-without-properties.input';

@InputType()
export class PropertyOwnerUpdateOneWithoutPropertiesNestedInput {

    @Field(() => PropertyOwnerCreateWithoutPropertiesInput, {nullable:true})
    @Type(() => PropertyOwnerCreateWithoutPropertiesInput)
    create?: PropertyOwnerCreateWithoutPropertiesInput;

    @Field(() => PropertyOwnerCreateOrConnectWithoutPropertiesInput, {nullable:true})
    @Type(() => PropertyOwnerCreateOrConnectWithoutPropertiesInput)
    connectOrCreate?: PropertyOwnerCreateOrConnectWithoutPropertiesInput;

    @Field(() => PropertyOwnerUpsertWithoutPropertiesInput, {nullable:true})
    @Type(() => PropertyOwnerUpsertWithoutPropertiesInput)
    upsert?: PropertyOwnerUpsertWithoutPropertiesInput;

    @Field(() => PropertyOwnerWhereInput, {nullable:true})
    @Type(() => PropertyOwnerWhereInput)
    disconnect?: PropertyOwnerWhereInput;

    @Field(() => PropertyOwnerWhereInput, {nullable:true})
    @Type(() => PropertyOwnerWhereInput)
    delete?: PropertyOwnerWhereInput;

    @Field(() => PropertyOwnerWhereUniqueInput, {nullable:true})
    @Type(() => PropertyOwnerWhereUniqueInput)
    connect?: Prisma.AtLeast<PropertyOwnerWhereUniqueInput, 'id'>;

    @Field(() => PropertyOwnerUpdateToOneWithWhereWithoutPropertiesInput, {nullable:true})
    @Type(() => PropertyOwnerUpdateToOneWithWhereWithoutPropertiesInput)
    update?: PropertyOwnerUpdateToOneWithWhereWithoutPropertiesInput;
}
