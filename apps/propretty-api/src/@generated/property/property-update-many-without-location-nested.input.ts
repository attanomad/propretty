import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyCreateWithoutLocationInput } from './property-create-without-location.input';
import { Type } from 'class-transformer';
import { PropertyCreateOrConnectWithoutLocationInput } from './property-create-or-connect-without-location.input';
import { PropertyUpsertWithWhereUniqueWithoutLocationInput } from './property-upsert-with-where-unique-without-location.input';
import { PropertyCreateManyLocationInputEnvelope } from './property-create-many-location-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PropertyWhereUniqueInput } from './property-where-unique.input';
import { PropertyUpdateWithWhereUniqueWithoutLocationInput } from './property-update-with-where-unique-without-location.input';
import { PropertyUpdateManyWithWhereWithoutLocationInput } from './property-update-many-with-where-without-location.input';
import { PropertyScalarWhereInput } from './property-scalar-where.input';

@InputType()
export class PropertyUpdateManyWithoutLocationNestedInput {

    @Field(() => [PropertyCreateWithoutLocationInput], {nullable:true})
    @Type(() => PropertyCreateWithoutLocationInput)
    create?: Array<PropertyCreateWithoutLocationInput>;

    @Field(() => [PropertyCreateOrConnectWithoutLocationInput], {nullable:true})
    @Type(() => PropertyCreateOrConnectWithoutLocationInput)
    connectOrCreate?: Array<PropertyCreateOrConnectWithoutLocationInput>;

    @Field(() => [PropertyUpsertWithWhereUniqueWithoutLocationInput], {nullable:true})
    @Type(() => PropertyUpsertWithWhereUniqueWithoutLocationInput)
    upsert?: Array<PropertyUpsertWithWhereUniqueWithoutLocationInput>;

    @Field(() => PropertyCreateManyLocationInputEnvelope, {nullable:true})
    @Type(() => PropertyCreateManyLocationInputEnvelope)
    createMany?: PropertyCreateManyLocationInputEnvelope;

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

    @Field(() => [PropertyUpdateWithWhereUniqueWithoutLocationInput], {nullable:true})
    @Type(() => PropertyUpdateWithWhereUniqueWithoutLocationInput)
    update?: Array<PropertyUpdateWithWhereUniqueWithoutLocationInput>;

    @Field(() => [PropertyUpdateManyWithWhereWithoutLocationInput], {nullable:true})
    @Type(() => PropertyUpdateManyWithWhereWithoutLocationInput)
    updateMany?: Array<PropertyUpdateManyWithWhereWithoutLocationInput>;

    @Field(() => [PropertyScalarWhereInput], {nullable:true})
    @Type(() => PropertyScalarWhereInput)
    deleteMany?: Array<PropertyScalarWhereInput>;
}
