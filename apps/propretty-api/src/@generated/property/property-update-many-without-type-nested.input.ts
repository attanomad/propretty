import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyCreateWithoutTypeInput } from './property-create-without-type.input';
import { Type } from 'class-transformer';
import { PropertyCreateOrConnectWithoutTypeInput } from './property-create-or-connect-without-type.input';
import { PropertyUpsertWithWhereUniqueWithoutTypeInput } from './property-upsert-with-where-unique-without-type.input';
import { PropertyCreateManyTypeInputEnvelope } from './property-create-many-type-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PropertyWhereUniqueInput } from './property-where-unique.input';
import { PropertyUpdateWithWhereUniqueWithoutTypeInput } from './property-update-with-where-unique-without-type.input';
import { PropertyUpdateManyWithWhereWithoutTypeInput } from './property-update-many-with-where-without-type.input';
import { PropertyScalarWhereInput } from './property-scalar-where.input';

@InputType()
export class PropertyUpdateManyWithoutTypeNestedInput {

    @Field(() => [PropertyCreateWithoutTypeInput], {nullable:true})
    @Type(() => PropertyCreateWithoutTypeInput)
    create?: Array<PropertyCreateWithoutTypeInput>;

    @Field(() => [PropertyCreateOrConnectWithoutTypeInput], {nullable:true})
    @Type(() => PropertyCreateOrConnectWithoutTypeInput)
    connectOrCreate?: Array<PropertyCreateOrConnectWithoutTypeInput>;

    @Field(() => [PropertyUpsertWithWhereUniqueWithoutTypeInput], {nullable:true})
    @Type(() => PropertyUpsertWithWhereUniqueWithoutTypeInput)
    upsert?: Array<PropertyUpsertWithWhereUniqueWithoutTypeInput>;

    @Field(() => PropertyCreateManyTypeInputEnvelope, {nullable:true})
    @Type(() => PropertyCreateManyTypeInputEnvelope)
    createMany?: PropertyCreateManyTypeInputEnvelope;

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

    @Field(() => [PropertyUpdateWithWhereUniqueWithoutTypeInput], {nullable:true})
    @Type(() => PropertyUpdateWithWhereUniqueWithoutTypeInput)
    update?: Array<PropertyUpdateWithWhereUniqueWithoutTypeInput>;

    @Field(() => [PropertyUpdateManyWithWhereWithoutTypeInput], {nullable:true})
    @Type(() => PropertyUpdateManyWithWhereWithoutTypeInput)
    updateMany?: Array<PropertyUpdateManyWithWhereWithoutTypeInput>;

    @Field(() => [PropertyScalarWhereInput], {nullable:true})
    @Type(() => PropertyScalarWhereInput)
    deleteMany?: Array<PropertyScalarWhereInput>;
}
