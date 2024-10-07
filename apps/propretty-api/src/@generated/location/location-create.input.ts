import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { PropertyCreateNestedManyWithoutLocationInput } from '../property/property-create-nested-many-without-location.input';

@InputType()
export class LocationCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    address?: string;

    @Field(() => String, {nullable:true})
    subdistrict?: string;

    @Field(() => String, {nullable:true})
    district?: string;

    @Field(() => String, {nullable:true})
    province?: string;

    @Field(() => String, {nullable:true})
    country?: string;

    @Field(() => String, {nullable:true})
    postalCode?: string;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    latitude?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    longitude?: Decimal;

    @Field(() => PropertyCreateNestedManyWithoutLocationInput, {nullable:true})
    @Type(() => PropertyCreateNestedManyWithoutLocationInput)
    Property?: PropertyCreateNestedManyWithoutLocationInput;
}
