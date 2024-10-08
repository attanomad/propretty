import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyCreateWithoutLeasesInput } from './property-create-without-leases.input';
import { Type } from 'class-transformer';
import { PropertyCreateOrConnectWithoutLeasesInput } from './property-create-or-connect-without-leases.input';
import { PropertyUpsertWithoutLeasesInput } from './property-upsert-without-leases.input';
import { Prisma } from '@prisma/client';
import { PropertyWhereUniqueInput } from './property-where-unique.input';
import { PropertyUpdateToOneWithWhereWithoutLeasesInput } from './property-update-to-one-with-where-without-leases.input';

@InputType()
export class PropertyUpdateOneRequiredWithoutLeasesNestedInput {

    @Field(() => PropertyCreateWithoutLeasesInput, {nullable:true})
    @Type(() => PropertyCreateWithoutLeasesInput)
    create?: PropertyCreateWithoutLeasesInput;

    @Field(() => PropertyCreateOrConnectWithoutLeasesInput, {nullable:true})
    @Type(() => PropertyCreateOrConnectWithoutLeasesInput)
    connectOrCreate?: PropertyCreateOrConnectWithoutLeasesInput;

    @Field(() => PropertyUpsertWithoutLeasesInput, {nullable:true})
    @Type(() => PropertyUpsertWithoutLeasesInput)
    upsert?: PropertyUpsertWithoutLeasesInput;

    @Field(() => PropertyWhereUniqueInput, {nullable:true})
    @Type(() => PropertyWhereUniqueInput)
    connect?: Prisma.AtLeast<PropertyWhereUniqueInput, 'id' | 'uniqueCode'>;

    @Field(() => PropertyUpdateToOneWithWhereWithoutLeasesInput, {nullable:true})
    @Type(() => PropertyUpdateToOneWithWhereWithoutLeasesInput)
    update?: PropertyUpdateToOneWithWhereWithoutLeasesInput;
}
