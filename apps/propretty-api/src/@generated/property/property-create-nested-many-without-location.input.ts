import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyCreateWithoutLocationInput } from './property-create-without-location.input';
import { Type } from 'class-transformer';
import { PropertyCreateOrConnectWithoutLocationInput } from './property-create-or-connect-without-location.input';
import { PropertyCreateManyLocationInputEnvelope } from './property-create-many-location-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PropertyWhereUniqueInput } from './property-where-unique.input';

@InputType()
export class PropertyCreateNestedManyWithoutLocationInput {

    @Field(() => [PropertyCreateWithoutLocationInput], {nullable:true})
    @Type(() => PropertyCreateWithoutLocationInput)
    create?: Array<PropertyCreateWithoutLocationInput>;

    @Field(() => [PropertyCreateOrConnectWithoutLocationInput], {nullable:true})
    @Type(() => PropertyCreateOrConnectWithoutLocationInput)
    connectOrCreate?: Array<PropertyCreateOrConnectWithoutLocationInput>;

    @Field(() => PropertyCreateManyLocationInputEnvelope, {nullable:true})
    @Type(() => PropertyCreateManyLocationInputEnvelope)
    createMany?: PropertyCreateManyLocationInputEnvelope;

    @Field(() => [PropertyWhereUniqueInput], {nullable:true})
    @Type(() => PropertyWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PropertyWhereUniqueInput, 'id' | 'uniqueCode'>>;
}
