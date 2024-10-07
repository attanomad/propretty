import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PropertyWhereUniqueInput } from './property-where-unique.input';
import { Type } from 'class-transformer';
import { PropertyCreateWithoutAssignedAgentsInput } from './property-create-without-assigned-agents.input';

@InputType()
export class PropertyCreateOrConnectWithoutAssignedAgentsInput {

    @Field(() => PropertyWhereUniqueInput, {nullable:false})
    @Type(() => PropertyWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyWhereUniqueInput, 'id' | 'uniqueCode'>;

    @Field(() => PropertyCreateWithoutAssignedAgentsInput, {nullable:false})
    @Type(() => PropertyCreateWithoutAssignedAgentsInput)
    create!: PropertyCreateWithoutAssignedAgentsInput;
}
