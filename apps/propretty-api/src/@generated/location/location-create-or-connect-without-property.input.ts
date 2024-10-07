import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LocationWhereUniqueInput } from './location-where-unique.input';
import { Type } from 'class-transformer';
import { LocationCreateWithoutPropertyInput } from './location-create-without-property.input';

@InputType()
export class LocationCreateOrConnectWithoutPropertyInput {

    @Field(() => LocationWhereUniqueInput, {nullable:false})
    @Type(() => LocationWhereUniqueInput)
    where!: Prisma.AtLeast<LocationWhereUniqueInput, 'id'>;

    @Field(() => LocationCreateWithoutPropertyInput, {nullable:false})
    @Type(() => LocationCreateWithoutPropertyInput)
    create!: LocationCreateWithoutPropertyInput;
}
