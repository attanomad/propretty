import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationWhereInput } from './location-where.input';
import { Type } from 'class-transformer';
import { LocationUpdateWithoutPropertyInput } from './location-update-without-property.input';

@InputType()
export class LocationUpdateToOneWithWhereWithoutPropertyInput {

    @Field(() => LocationWhereInput, {nullable:true})
    @Type(() => LocationWhereInput)
    where?: LocationWhereInput;

    @Field(() => LocationUpdateWithoutPropertyInput, {nullable:false})
    @Type(() => LocationUpdateWithoutPropertyInput)
    data!: LocationUpdateWithoutPropertyInput;
}
