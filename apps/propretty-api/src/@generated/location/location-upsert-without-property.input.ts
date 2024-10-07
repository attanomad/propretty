import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationUpdateWithoutPropertyInput } from './location-update-without-property.input';
import { Type } from 'class-transformer';
import { LocationCreateWithoutPropertyInput } from './location-create-without-property.input';
import { LocationWhereInput } from './location-where.input';

@InputType()
export class LocationUpsertWithoutPropertyInput {

    @Field(() => LocationUpdateWithoutPropertyInput, {nullable:false})
    @Type(() => LocationUpdateWithoutPropertyInput)
    update!: LocationUpdateWithoutPropertyInput;

    @Field(() => LocationCreateWithoutPropertyInput, {nullable:false})
    @Type(() => LocationCreateWithoutPropertyInput)
    create!: LocationCreateWithoutPropertyInput;

    @Field(() => LocationWhereInput, {nullable:true})
    @Type(() => LocationWhereInput)
    where?: LocationWhereInput;
}
