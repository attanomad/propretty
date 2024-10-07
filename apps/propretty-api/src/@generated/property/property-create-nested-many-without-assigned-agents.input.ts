import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyCreateWithoutAssignedAgentsInput } from './property-create-without-assigned-agents.input';
import { Type } from 'class-transformer';
import { PropertyCreateOrConnectWithoutAssignedAgentsInput } from './property-create-or-connect-without-assigned-agents.input';
import { Prisma } from '@prisma/client';
import { PropertyWhereUniqueInput } from './property-where-unique.input';

@InputType()
export class PropertyCreateNestedManyWithoutAssignedAgentsInput {

    @Field(() => [PropertyCreateWithoutAssignedAgentsInput], {nullable:true})
    @Type(() => PropertyCreateWithoutAssignedAgentsInput)
    create?: Array<PropertyCreateWithoutAssignedAgentsInput>;

    @Field(() => [PropertyCreateOrConnectWithoutAssignedAgentsInput], {nullable:true})
    @Type(() => PropertyCreateOrConnectWithoutAssignedAgentsInput)
    connectOrCreate?: Array<PropertyCreateOrConnectWithoutAssignedAgentsInput>;

    @Field(() => [PropertyWhereUniqueInput], {nullable:true})
    @Type(() => PropertyWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PropertyWhereUniqueInput, 'id' | 'uniqueCode'>>;
}
