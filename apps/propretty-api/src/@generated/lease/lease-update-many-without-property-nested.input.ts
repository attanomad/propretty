import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LeaseCreateWithoutPropertyInput } from './lease-create-without-property.input';
import { Type } from 'class-transformer';
import { LeaseCreateOrConnectWithoutPropertyInput } from './lease-create-or-connect-without-property.input';
import { LeaseUpsertWithWhereUniqueWithoutPropertyInput } from './lease-upsert-with-where-unique-without-property.input';
import { LeaseCreateManyPropertyInputEnvelope } from './lease-create-many-property-input-envelope.input';
import { Prisma } from '@prisma/client';
import { LeaseWhereUniqueInput } from './lease-where-unique.input';
import { LeaseUpdateWithWhereUniqueWithoutPropertyInput } from './lease-update-with-where-unique-without-property.input';
import { LeaseUpdateManyWithWhereWithoutPropertyInput } from './lease-update-many-with-where-without-property.input';
import { LeaseScalarWhereInput } from './lease-scalar-where.input';

@InputType()
export class LeaseUpdateManyWithoutPropertyNestedInput {

    @Field(() => [LeaseCreateWithoutPropertyInput], {nullable:true})
    @Type(() => LeaseCreateWithoutPropertyInput)
    create?: Array<LeaseCreateWithoutPropertyInput>;

    @Field(() => [LeaseCreateOrConnectWithoutPropertyInput], {nullable:true})
    @Type(() => LeaseCreateOrConnectWithoutPropertyInput)
    connectOrCreate?: Array<LeaseCreateOrConnectWithoutPropertyInput>;

    @Field(() => [LeaseUpsertWithWhereUniqueWithoutPropertyInput], {nullable:true})
    @Type(() => LeaseUpsertWithWhereUniqueWithoutPropertyInput)
    upsert?: Array<LeaseUpsertWithWhereUniqueWithoutPropertyInput>;

    @Field(() => LeaseCreateManyPropertyInputEnvelope, {nullable:true})
    @Type(() => LeaseCreateManyPropertyInputEnvelope)
    createMany?: LeaseCreateManyPropertyInputEnvelope;

    @Field(() => [LeaseWhereUniqueInput], {nullable:true})
    @Type(() => LeaseWhereUniqueInput)
    set?: Array<Prisma.AtLeast<LeaseWhereUniqueInput, 'id'>>;

    @Field(() => [LeaseWhereUniqueInput], {nullable:true})
    @Type(() => LeaseWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<LeaseWhereUniqueInput, 'id'>>;

    @Field(() => [LeaseWhereUniqueInput], {nullable:true})
    @Type(() => LeaseWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<LeaseWhereUniqueInput, 'id'>>;

    @Field(() => [LeaseWhereUniqueInput], {nullable:true})
    @Type(() => LeaseWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LeaseWhereUniqueInput, 'id'>>;

    @Field(() => [LeaseUpdateWithWhereUniqueWithoutPropertyInput], {nullable:true})
    @Type(() => LeaseUpdateWithWhereUniqueWithoutPropertyInput)
    update?: Array<LeaseUpdateWithWhereUniqueWithoutPropertyInput>;

    @Field(() => [LeaseUpdateManyWithWhereWithoutPropertyInput], {nullable:true})
    @Type(() => LeaseUpdateManyWithWhereWithoutPropertyInput)
    updateMany?: Array<LeaseUpdateManyWithWhereWithoutPropertyInput>;

    @Field(() => [LeaseScalarWhereInput], {nullable:true})
    @Type(() => LeaseScalarWhereInput)
    deleteMany?: Array<LeaseScalarWhereInput>;
}
