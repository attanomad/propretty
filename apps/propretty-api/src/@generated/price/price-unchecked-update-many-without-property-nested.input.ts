import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PriceCreateWithoutPropertyInput } from './price-create-without-property.input';
import { Type } from 'class-transformer';
import { PriceCreateOrConnectWithoutPropertyInput } from './price-create-or-connect-without-property.input';
import { PriceUpsertWithWhereUniqueWithoutPropertyInput } from './price-upsert-with-where-unique-without-property.input';
import { PriceCreateManyPropertyInputEnvelope } from './price-create-many-property-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PriceWhereUniqueInput } from './price-where-unique.input';
import { PriceUpdateWithWhereUniqueWithoutPropertyInput } from './price-update-with-where-unique-without-property.input';
import { PriceUpdateManyWithWhereWithoutPropertyInput } from './price-update-many-with-where-without-property.input';
import { PriceScalarWhereInput } from './price-scalar-where.input';

@InputType()
export class PriceUncheckedUpdateManyWithoutPropertyNestedInput {

    @Field(() => [PriceCreateWithoutPropertyInput], {nullable:true})
    @Type(() => PriceCreateWithoutPropertyInput)
    create?: Array<PriceCreateWithoutPropertyInput>;

    @Field(() => [PriceCreateOrConnectWithoutPropertyInput], {nullable:true})
    @Type(() => PriceCreateOrConnectWithoutPropertyInput)
    connectOrCreate?: Array<PriceCreateOrConnectWithoutPropertyInput>;

    @Field(() => [PriceUpsertWithWhereUniqueWithoutPropertyInput], {nullable:true})
    @Type(() => PriceUpsertWithWhereUniqueWithoutPropertyInput)
    upsert?: Array<PriceUpsertWithWhereUniqueWithoutPropertyInput>;

    @Field(() => PriceCreateManyPropertyInputEnvelope, {nullable:true})
    @Type(() => PriceCreateManyPropertyInputEnvelope)
    createMany?: PriceCreateManyPropertyInputEnvelope;

    @Field(() => [PriceWhereUniqueInput], {nullable:true})
    @Type(() => PriceWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PriceWhereUniqueInput, 'id' | 'currency_propertyId'>>;

    @Field(() => [PriceWhereUniqueInput], {nullable:true})
    @Type(() => PriceWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PriceWhereUniqueInput, 'id' | 'currency_propertyId'>>;

    @Field(() => [PriceWhereUniqueInput], {nullable:true})
    @Type(() => PriceWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PriceWhereUniqueInput, 'id' | 'currency_propertyId'>>;

    @Field(() => [PriceWhereUniqueInput], {nullable:true})
    @Type(() => PriceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PriceWhereUniqueInput, 'id' | 'currency_propertyId'>>;

    @Field(() => [PriceUpdateWithWhereUniqueWithoutPropertyInput], {nullable:true})
    @Type(() => PriceUpdateWithWhereUniqueWithoutPropertyInput)
    update?: Array<PriceUpdateWithWhereUniqueWithoutPropertyInput>;

    @Field(() => [PriceUpdateManyWithWhereWithoutPropertyInput], {nullable:true})
    @Type(() => PriceUpdateManyWithWhereWithoutPropertyInput)
    updateMany?: Array<PriceUpdateManyWithWhereWithoutPropertyInput>;

    @Field(() => [PriceScalarWhereInput], {nullable:true})
    @Type(() => PriceScalarWhereInput)
    deleteMany?: Array<PriceScalarWhereInput>;
}
