import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyCreateWithoutLeasesInput } from './property-create-without-leases.input';
import { Type } from 'class-transformer';
import { PropertyCreateOrConnectWithoutLeasesInput } from './property-create-or-connect-without-leases.input';
import { Prisma } from '@prisma/client';
import { PropertyWhereUniqueInput } from './property-where-unique.input';

@InputType()
export class PropertyCreateNestedOneWithoutLeasesInput {

    @Field(() => PropertyCreateWithoutLeasesInput, {nullable:true})
    @Type(() => PropertyCreateWithoutLeasesInput)
    create?: PropertyCreateWithoutLeasesInput;

    @Field(() => PropertyCreateOrConnectWithoutLeasesInput, {nullable:true})
    @Type(() => PropertyCreateOrConnectWithoutLeasesInput)
    connectOrCreate?: PropertyCreateOrConnectWithoutLeasesInput;

    @Field(() => PropertyWhereUniqueInput, {nullable:true})
    @Type(() => PropertyWhereUniqueInput)
    connect?: Prisma.AtLeast<PropertyWhereUniqueInput, 'id' | 'uniqueCode'>;
}
