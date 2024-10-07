import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyCreateWithoutPropertyOwnerInput } from './property-create-without-property-owner.input';
import { Type } from 'class-transformer';
import { PropertyCreateOrConnectWithoutPropertyOwnerInput } from './property-create-or-connect-without-property-owner.input';
import { PropertyCreateManyPropertyOwnerInputEnvelope } from './property-create-many-property-owner-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PropertyWhereUniqueInput } from './property-where-unique.input';

@InputType()
export class PropertyCreateNestedManyWithoutPropertyOwnerInput {

    @Field(() => [PropertyCreateWithoutPropertyOwnerInput], {nullable:true})
    @Type(() => PropertyCreateWithoutPropertyOwnerInput)
    create?: Array<PropertyCreateWithoutPropertyOwnerInput>;

    @Field(() => [PropertyCreateOrConnectWithoutPropertyOwnerInput], {nullable:true})
    @Type(() => PropertyCreateOrConnectWithoutPropertyOwnerInput)
    connectOrCreate?: Array<PropertyCreateOrConnectWithoutPropertyOwnerInput>;

    @Field(() => PropertyCreateManyPropertyOwnerInputEnvelope, {nullable:true})
    @Type(() => PropertyCreateManyPropertyOwnerInputEnvelope)
    createMany?: PropertyCreateManyPropertyOwnerInputEnvelope;

    @Field(() => [PropertyWhereUniqueInput], {nullable:true})
    @Type(() => PropertyWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PropertyWhereUniqueInput, 'id' | 'uniqueCode'>>;
}
