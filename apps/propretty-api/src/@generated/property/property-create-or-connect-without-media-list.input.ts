import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PropertyWhereUniqueInput } from './property-where-unique.input';
import { Type } from 'class-transformer';
import { PropertyCreateWithoutMediaListInput } from './property-create-without-media-list.input';

@InputType()
export class PropertyCreateOrConnectWithoutMediaListInput {

    @Field(() => PropertyWhereUniqueInput, {nullable:false})
    @Type(() => PropertyWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyWhereUniqueInput, 'id' | 'uniqueCode'>;

    @Field(() => PropertyCreateWithoutMediaListInput, {nullable:false})
    @Type(() => PropertyCreateWithoutMediaListInput)
    create!: PropertyCreateWithoutMediaListInput;
}
