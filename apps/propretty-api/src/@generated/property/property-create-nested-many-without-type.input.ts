import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyCreateWithoutTypeInput } from './property-create-without-type.input';
import { Type } from 'class-transformer';
import { PropertyCreateOrConnectWithoutTypeInput } from './property-create-or-connect-without-type.input';
import { PropertyCreateManyTypeInputEnvelope } from './property-create-many-type-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PropertyWhereUniqueInput } from './property-where-unique.input';

@InputType()
export class PropertyCreateNestedManyWithoutTypeInput {

    @Field(() => [PropertyCreateWithoutTypeInput], {nullable:true})
    @Type(() => PropertyCreateWithoutTypeInput)
    create?: Array<PropertyCreateWithoutTypeInput>;

    @Field(() => [PropertyCreateOrConnectWithoutTypeInput], {nullable:true})
    @Type(() => PropertyCreateOrConnectWithoutTypeInput)
    connectOrCreate?: Array<PropertyCreateOrConnectWithoutTypeInput>;

    @Field(() => PropertyCreateManyTypeInputEnvelope, {nullable:true})
    @Type(() => PropertyCreateManyTypeInputEnvelope)
    createMany?: PropertyCreateManyTypeInputEnvelope;

    @Field(() => [PropertyWhereUniqueInput], {nullable:true})
    @Type(() => PropertyWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PropertyWhereUniqueInput, 'id' | 'uniqueCode'>>;
}
