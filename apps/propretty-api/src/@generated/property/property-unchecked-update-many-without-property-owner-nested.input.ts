import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyCreateWithoutPropertyOwnerInput } from './property-create-without-property-owner.input';
import { Type } from 'class-transformer';
import { PropertyCreateOrConnectWithoutPropertyOwnerInput } from './property-create-or-connect-without-property-owner.input';
import { PropertyUpsertWithWhereUniqueWithoutPropertyOwnerInput } from './property-upsert-with-where-unique-without-property-owner.input';
import { PropertyCreateManyPropertyOwnerInputEnvelope } from './property-create-many-property-owner-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PropertyWhereUniqueInput } from './property-where-unique.input';
import { PropertyUpdateWithWhereUniqueWithoutPropertyOwnerInput } from './property-update-with-where-unique-without-property-owner.input';
import { PropertyUpdateManyWithWhereWithoutPropertyOwnerInput } from './property-update-many-with-where-without-property-owner.input';
import { PropertyScalarWhereInput } from './property-scalar-where.input';

@InputType()
export class PropertyUncheckedUpdateManyWithoutPropertyOwnerNestedInput {

    @Field(() => [PropertyCreateWithoutPropertyOwnerInput], {nullable:true})
    @Type(() => PropertyCreateWithoutPropertyOwnerInput)
    create?: Array<PropertyCreateWithoutPropertyOwnerInput>;

    @Field(() => [PropertyCreateOrConnectWithoutPropertyOwnerInput], {nullable:true})
    @Type(() => PropertyCreateOrConnectWithoutPropertyOwnerInput)
    connectOrCreate?: Array<PropertyCreateOrConnectWithoutPropertyOwnerInput>;

    @Field(() => [PropertyUpsertWithWhereUniqueWithoutPropertyOwnerInput], {nullable:true})
    @Type(() => PropertyUpsertWithWhereUniqueWithoutPropertyOwnerInput)
    upsert?: Array<PropertyUpsertWithWhereUniqueWithoutPropertyOwnerInput>;

    @Field(() => PropertyCreateManyPropertyOwnerInputEnvelope, {nullable:true})
    @Type(() => PropertyCreateManyPropertyOwnerInputEnvelope)
    createMany?: PropertyCreateManyPropertyOwnerInputEnvelope;

    @Field(() => [PropertyWhereUniqueInput], {nullable:true})
    @Type(() => PropertyWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PropertyWhereUniqueInput, 'id' | 'uniqueCode'>>;

    @Field(() => [PropertyWhereUniqueInput], {nullable:true})
    @Type(() => PropertyWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PropertyWhereUniqueInput, 'id' | 'uniqueCode'>>;

    @Field(() => [PropertyWhereUniqueInput], {nullable:true})
    @Type(() => PropertyWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PropertyWhereUniqueInput, 'id' | 'uniqueCode'>>;

    @Field(() => [PropertyWhereUniqueInput], {nullable:true})
    @Type(() => PropertyWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PropertyWhereUniqueInput, 'id' | 'uniqueCode'>>;

    @Field(() => [PropertyUpdateWithWhereUniqueWithoutPropertyOwnerInput], {nullable:true})
    @Type(() => PropertyUpdateWithWhereUniqueWithoutPropertyOwnerInput)
    update?: Array<PropertyUpdateWithWhereUniqueWithoutPropertyOwnerInput>;

    @Field(() => [PropertyUpdateManyWithWhereWithoutPropertyOwnerInput], {nullable:true})
    @Type(() => PropertyUpdateManyWithWhereWithoutPropertyOwnerInput)
    updateMany?: Array<PropertyUpdateManyWithWhereWithoutPropertyOwnerInput>;

    @Field(() => [PropertyScalarWhereInput], {nullable:true})
    @Type(() => PropertyScalarWhereInput)
    deleteMany?: Array<PropertyScalarWhereInput>;
}
