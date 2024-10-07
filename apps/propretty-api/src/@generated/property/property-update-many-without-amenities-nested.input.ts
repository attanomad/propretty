import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyCreateWithoutAmenitiesInput } from './property-create-without-amenities.input';
import { Type } from 'class-transformer';
import { PropertyCreateOrConnectWithoutAmenitiesInput } from './property-create-or-connect-without-amenities.input';
import { PropertyUpsertWithWhereUniqueWithoutAmenitiesInput } from './property-upsert-with-where-unique-without-amenities.input';
import { Prisma } from '@prisma/client';
import { PropertyWhereUniqueInput } from './property-where-unique.input';
import { PropertyUpdateWithWhereUniqueWithoutAmenitiesInput } from './property-update-with-where-unique-without-amenities.input';
import { PropertyUpdateManyWithWhereWithoutAmenitiesInput } from './property-update-many-with-where-without-amenities.input';
import { PropertyScalarWhereInput } from './property-scalar-where.input';

@InputType()
export class PropertyUpdateManyWithoutAmenitiesNestedInput {

    @Field(() => [PropertyCreateWithoutAmenitiesInput], {nullable:true})
    @Type(() => PropertyCreateWithoutAmenitiesInput)
    create?: Array<PropertyCreateWithoutAmenitiesInput>;

    @Field(() => [PropertyCreateOrConnectWithoutAmenitiesInput], {nullable:true})
    @Type(() => PropertyCreateOrConnectWithoutAmenitiesInput)
    connectOrCreate?: Array<PropertyCreateOrConnectWithoutAmenitiesInput>;

    @Field(() => [PropertyUpsertWithWhereUniqueWithoutAmenitiesInput], {nullable:true})
    @Type(() => PropertyUpsertWithWhereUniqueWithoutAmenitiesInput)
    upsert?: Array<PropertyUpsertWithWhereUniqueWithoutAmenitiesInput>;

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

    @Field(() => [PropertyUpdateWithWhereUniqueWithoutAmenitiesInput], {nullable:true})
    @Type(() => PropertyUpdateWithWhereUniqueWithoutAmenitiesInput)
    update?: Array<PropertyUpdateWithWhereUniqueWithoutAmenitiesInput>;

    @Field(() => [PropertyUpdateManyWithWhereWithoutAmenitiesInput], {nullable:true})
    @Type(() => PropertyUpdateManyWithWhereWithoutAmenitiesInput)
    updateMany?: Array<PropertyUpdateManyWithWhereWithoutAmenitiesInput>;

    @Field(() => [PropertyScalarWhereInput], {nullable:true})
    @Type(() => PropertyScalarWhereInput)
    deleteMany?: Array<PropertyScalarWhereInput>;
}
