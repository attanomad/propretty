import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LeaseCreateWithoutPropertyInput } from './lease-create-without-property.input';
import { Type } from 'class-transformer';
import { LeaseCreateOrConnectWithoutPropertyInput } from './lease-create-or-connect-without-property.input';
import { LeaseCreateManyPropertyInputEnvelope } from './lease-create-many-property-input-envelope.input';
import { Prisma } from '@prisma/client';
import { LeaseWhereUniqueInput } from './lease-where-unique.input';

@InputType()
export class LeaseUncheckedCreateNestedManyWithoutPropertyInput {

    @Field(() => [LeaseCreateWithoutPropertyInput], {nullable:true})
    @Type(() => LeaseCreateWithoutPropertyInput)
    create?: Array<LeaseCreateWithoutPropertyInput>;

    @Field(() => [LeaseCreateOrConnectWithoutPropertyInput], {nullable:true})
    @Type(() => LeaseCreateOrConnectWithoutPropertyInput)
    connectOrCreate?: Array<LeaseCreateOrConnectWithoutPropertyInput>;

    @Field(() => LeaseCreateManyPropertyInputEnvelope, {nullable:true})
    @Type(() => LeaseCreateManyPropertyInputEnvelope)
    createMany?: LeaseCreateManyPropertyInputEnvelope;

    @Field(() => [LeaseWhereUniqueInput], {nullable:true})
    @Type(() => LeaseWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LeaseWhereUniqueInput, 'id'>>;
}
