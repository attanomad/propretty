import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationCreateWithoutPropertyInput } from './location-create-without-property.input';
import { Type } from 'class-transformer';
import { LocationCreateOrConnectWithoutPropertyInput } from './location-create-or-connect-without-property.input';
import { Prisma } from '@prisma/client';
import { LocationWhereUniqueInput } from './location-where-unique.input';

@InputType()
export class LocationCreateNestedOneWithoutPropertyInput {

    @Field(() => LocationCreateWithoutPropertyInput, {nullable:true})
    @Type(() => LocationCreateWithoutPropertyInput)
    create?: LocationCreateWithoutPropertyInput;

    @Field(() => LocationCreateOrConnectWithoutPropertyInput, {nullable:true})
    @Type(() => LocationCreateOrConnectWithoutPropertyInput)
    connectOrCreate?: LocationCreateOrConnectWithoutPropertyInput;

    @Field(() => LocationWhereUniqueInput, {nullable:true})
    @Type(() => LocationWhereUniqueInput)
    connect?: Prisma.AtLeast<LocationWhereUniqueInput, 'id'>;
}
