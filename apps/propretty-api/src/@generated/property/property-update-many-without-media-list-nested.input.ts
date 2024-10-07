import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyCreateWithoutMediaListInput } from './property-create-without-media-list.input';
import { Type } from 'class-transformer';
import { PropertyCreateOrConnectWithoutMediaListInput } from './property-create-or-connect-without-media-list.input';
import { PropertyUpsertWithWhereUniqueWithoutMediaListInput } from './property-upsert-with-where-unique-without-media-list.input';
import { Prisma } from '@prisma/client';
import { PropertyWhereUniqueInput } from './property-where-unique.input';
import { PropertyUpdateWithWhereUniqueWithoutMediaListInput } from './property-update-with-where-unique-without-media-list.input';
import { PropertyUpdateManyWithWhereWithoutMediaListInput } from './property-update-many-with-where-without-media-list.input';
import { PropertyScalarWhereInput } from './property-scalar-where.input';

@InputType()
export class PropertyUpdateManyWithoutMediaListNestedInput {

    @Field(() => [PropertyCreateWithoutMediaListInput], {nullable:true})
    @Type(() => PropertyCreateWithoutMediaListInput)
    create?: Array<PropertyCreateWithoutMediaListInput>;

    @Field(() => [PropertyCreateOrConnectWithoutMediaListInput], {nullable:true})
    @Type(() => PropertyCreateOrConnectWithoutMediaListInput)
    connectOrCreate?: Array<PropertyCreateOrConnectWithoutMediaListInput>;

    @Field(() => [PropertyUpsertWithWhereUniqueWithoutMediaListInput], {nullable:true})
    @Type(() => PropertyUpsertWithWhereUniqueWithoutMediaListInput)
    upsert?: Array<PropertyUpsertWithWhereUniqueWithoutMediaListInput>;

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

    @Field(() => [PropertyUpdateWithWhereUniqueWithoutMediaListInput], {nullable:true})
    @Type(() => PropertyUpdateWithWhereUniqueWithoutMediaListInput)
    update?: Array<PropertyUpdateWithWhereUniqueWithoutMediaListInput>;

    @Field(() => [PropertyUpdateManyWithWhereWithoutMediaListInput], {nullable:true})
    @Type(() => PropertyUpdateManyWithWhereWithoutMediaListInput)
    updateMany?: Array<PropertyUpdateManyWithWhereWithoutMediaListInput>;

    @Field(() => [PropertyScalarWhereInput], {nullable:true})
    @Type(() => PropertyScalarWhereInput)
    deleteMany?: Array<PropertyScalarWhereInput>;
}
