import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyCreateWithoutAmenitiesInput } from './property-create-without-amenities.input';
import { Type } from 'class-transformer';
import { PropertyCreateOrConnectWithoutAmenitiesInput } from './property-create-or-connect-without-amenities.input';
import { Prisma } from '@prisma/client';
import { PropertyWhereUniqueInput } from './property-where-unique.input';

@InputType()
export class PropertyCreateNestedManyWithoutAmenitiesInput {

    @Field(() => [PropertyCreateWithoutAmenitiesInput], {nullable:true})
    @Type(() => PropertyCreateWithoutAmenitiesInput)
    create?: Array<PropertyCreateWithoutAmenitiesInput>;

    @Field(() => [PropertyCreateOrConnectWithoutAmenitiesInput], {nullable:true})
    @Type(() => PropertyCreateOrConnectWithoutAmenitiesInput)
    connectOrCreate?: Array<PropertyCreateOrConnectWithoutAmenitiesInput>;

    @Field(() => [PropertyWhereUniqueInput], {nullable:true})
    @Type(() => PropertyWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PropertyWhereUniqueInput, 'id' | 'uniqueCode'>>;
}
