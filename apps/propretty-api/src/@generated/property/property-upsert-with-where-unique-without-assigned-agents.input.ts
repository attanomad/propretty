import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PropertyWhereUniqueInput } from './property-where-unique.input';
import { Type } from 'class-transformer';
import { PropertyUpdateWithoutAssignedAgentsInput } from './property-update-without-assigned-agents.input';
import { PropertyCreateWithoutAssignedAgentsInput } from './property-create-without-assigned-agents.input';

@InputType()
export class PropertyUpsertWithWhereUniqueWithoutAssignedAgentsInput {

    @Field(() => PropertyWhereUniqueInput, {nullable:false})
    @Type(() => PropertyWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyWhereUniqueInput, 'id' | 'uniqueCode'>;

    @Field(() => PropertyUpdateWithoutAssignedAgentsInput, {nullable:false})
    @Type(() => PropertyUpdateWithoutAssignedAgentsInput)
    update!: PropertyUpdateWithoutAssignedAgentsInput;

    @Field(() => PropertyCreateWithoutAssignedAgentsInput, {nullable:false})
    @Type(() => PropertyCreateWithoutAssignedAgentsInput)
    create!: PropertyCreateWithoutAssignedAgentsInput;
}
