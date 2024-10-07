import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyCreateWithoutAssignedAgentsInput } from './property-create-without-assigned-agents.input';
import { Type } from 'class-transformer';
import { PropertyCreateOrConnectWithoutAssignedAgentsInput } from './property-create-or-connect-without-assigned-agents.input';
import { PropertyUpsertWithWhereUniqueWithoutAssignedAgentsInput } from './property-upsert-with-where-unique-without-assigned-agents.input';
import { Prisma } from '@prisma/client';
import { PropertyWhereUniqueInput } from './property-where-unique.input';
import { PropertyUpdateWithWhereUniqueWithoutAssignedAgentsInput } from './property-update-with-where-unique-without-assigned-agents.input';
import { PropertyUpdateManyWithWhereWithoutAssignedAgentsInput } from './property-update-many-with-where-without-assigned-agents.input';
import { PropertyScalarWhereInput } from './property-scalar-where.input';

@InputType()
export class PropertyUpdateManyWithoutAssignedAgentsNestedInput {

    @Field(() => [PropertyCreateWithoutAssignedAgentsInput], {nullable:true})
    @Type(() => PropertyCreateWithoutAssignedAgentsInput)
    create?: Array<PropertyCreateWithoutAssignedAgentsInput>;

    @Field(() => [PropertyCreateOrConnectWithoutAssignedAgentsInput], {nullable:true})
    @Type(() => PropertyCreateOrConnectWithoutAssignedAgentsInput)
    connectOrCreate?: Array<PropertyCreateOrConnectWithoutAssignedAgentsInput>;

    @Field(() => [PropertyUpsertWithWhereUniqueWithoutAssignedAgentsInput], {nullable:true})
    @Type(() => PropertyUpsertWithWhereUniqueWithoutAssignedAgentsInput)
    upsert?: Array<PropertyUpsertWithWhereUniqueWithoutAssignedAgentsInput>;

    @Field(() => [PropertyWhereUniqueInput], {nullable:true})
    @Type(() => PropertyWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PropertyWhereUniqueInput, 'id' | 'uniqueCode'>>;

    @Field(() => [PropertyWhereUniqueInput], {nullable:true})
    @Type(() => PropertyWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PropertyWhereUniqueInput, 'id' | 'uniqueCode'>>;

    @Field(() => [PropertyWhereUniqueInput], {nullable:true})
    @Type(() => PropertyWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PropertyWhereUniqueInput, 'id' | 'uniqueCode'>>;

    @Field(() => [PropertyWhereUniqueInput], {nullable:true})
    @Type(() => PropertyWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PropertyWhereUniqueInput, 'id' | 'uniqueCode'>>;

    @Field(() => [PropertyUpdateWithWhereUniqueWithoutAssignedAgentsInput], {nullable:true})
    @Type(() => PropertyUpdateWithWhereUniqueWithoutAssignedAgentsInput)
    update?: Array<PropertyUpdateWithWhereUniqueWithoutAssignedAgentsInput>;

    @Field(() => [PropertyUpdateManyWithWhereWithoutAssignedAgentsInput], {nullable:true})
    @Type(() => PropertyUpdateManyWithWhereWithoutAssignedAgentsInput)
    updateMany?: Array<PropertyUpdateManyWithWhereWithoutAssignedAgentsInput>;

    @Field(() => [PropertyScalarWhereInput], {nullable:true})
    @Type(() => PropertyScalarWhereInput)
    deleteMany?: Array<PropertyScalarWhereInput>;
}
