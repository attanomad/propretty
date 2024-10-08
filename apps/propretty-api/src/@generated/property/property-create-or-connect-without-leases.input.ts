import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PropertyWhereUniqueInput } from './property-where-unique.input';
import { Type } from 'class-transformer';
import { PropertyCreateWithoutLeasesInput } from './property-create-without-leases.input';

@InputType()
export class PropertyCreateOrConnectWithoutLeasesInput {

    @Field(() => PropertyWhereUniqueInput, {nullable:false})
    @Type(() => PropertyWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyWhereUniqueInput, 'id' | 'uniqueCode'>;

    @Field(() => PropertyCreateWithoutLeasesInput, {nullable:false})
    @Type(() => PropertyCreateWithoutLeasesInput)
    create!: PropertyCreateWithoutLeasesInput;
}
