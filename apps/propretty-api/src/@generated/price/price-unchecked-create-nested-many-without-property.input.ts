import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PriceCreateWithoutPropertyInput } from './price-create-without-property.input';
import { Type } from 'class-transformer';
import { PriceCreateOrConnectWithoutPropertyInput } from './price-create-or-connect-without-property.input';
import { PriceCreateManyPropertyInputEnvelope } from './price-create-many-property-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PriceWhereUniqueInput } from './price-where-unique.input';

@InputType()
export class PriceUncheckedCreateNestedManyWithoutPropertyInput {

    @Field(() => [PriceCreateWithoutPropertyInput], {nullable:true})
    @Type(() => PriceCreateWithoutPropertyInput)
    create?: Array<PriceCreateWithoutPropertyInput>;

    @Field(() => [PriceCreateOrConnectWithoutPropertyInput], {nullable:true})
    @Type(() => PriceCreateOrConnectWithoutPropertyInput)
    connectOrCreate?: Array<PriceCreateOrConnectWithoutPropertyInput>;

    @Field(() => PriceCreateManyPropertyInputEnvelope, {nullable:true})
    @Type(() => PriceCreateManyPropertyInputEnvelope)
    createMany?: PriceCreateManyPropertyInputEnvelope;

    @Field(() => [PriceWhereUniqueInput], {nullable:true})
    @Type(() => PriceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PriceWhereUniqueInput, 'id' | 'currency_propertyId'>>;
}
