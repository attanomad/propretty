import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationCreateWithoutPropertyInput } from './location-create-without-property.input';
import { Type } from 'class-transformer';
import { LocationCreateOrConnectWithoutPropertyInput } from './location-create-or-connect-without-property.input';
import { LocationUpsertWithoutPropertyInput } from './location-upsert-without-property.input';
import { LocationWhereInput } from './location-where.input';
import { Prisma } from '@prisma/client';
import { LocationWhereUniqueInput } from './location-where-unique.input';
import { LocationUpdateToOneWithWhereWithoutPropertyInput } from './location-update-to-one-with-where-without-property.input';

@InputType()
export class LocationUpdateOneWithoutPropertyNestedInput {

    @Field(() => LocationCreateWithoutPropertyInput, {nullable:true})
    @Type(() => LocationCreateWithoutPropertyInput)
    create?: LocationCreateWithoutPropertyInput;

    @Field(() => LocationCreateOrConnectWithoutPropertyInput, {nullable:true})
    @Type(() => LocationCreateOrConnectWithoutPropertyInput)
    connectOrCreate?: LocationCreateOrConnectWithoutPropertyInput;

    @Field(() => LocationUpsertWithoutPropertyInput, {nullable:true})
    @Type(() => LocationUpsertWithoutPropertyInput)
    upsert?: LocationUpsertWithoutPropertyInput;

    @Field(() => LocationWhereInput, {nullable:true})
    @Type(() => LocationWhereInput)
    disconnect?: LocationWhereInput;

    @Field(() => LocationWhereInput, {nullable:true})
    @Type(() => LocationWhereInput)
    delete?: LocationWhereInput;

    @Field(() => LocationWhereUniqueInput, {nullable:true})
    @Type(() => LocationWhereUniqueInput)
    connect?: Prisma.AtLeast<LocationWhereUniqueInput, 'id'>;

    @Field(() => LocationUpdateToOneWithWhereWithoutPropertyInput, {nullable:true})
    @Type(() => LocationUpdateToOneWithWhereWithoutPropertyInput)
    update?: LocationUpdateToOneWithWhereWithoutPropertyInput;
}
