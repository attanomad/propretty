import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyCreateWithoutMediaListInput } from './property-create-without-media-list.input';
import { Type } from 'class-transformer';
import { PropertyCreateOrConnectWithoutMediaListInput } from './property-create-or-connect-without-media-list.input';
import { Prisma } from '@prisma/client';
import { PropertyWhereUniqueInput } from './property-where-unique.input';

@InputType()
export class PropertyUncheckedCreateNestedManyWithoutMediaListInput {

    @Field(() => [PropertyCreateWithoutMediaListInput], {nullable:true})
    @Type(() => PropertyCreateWithoutMediaListInput)
    create?: Array<PropertyCreateWithoutMediaListInput>;

    @Field(() => [PropertyCreateOrConnectWithoutMediaListInput], {nullable:true})
    @Type(() => PropertyCreateOrConnectWithoutMediaListInput)
    connectOrCreate?: Array<PropertyCreateOrConnectWithoutMediaListInput>;

    @Field(() => [PropertyWhereUniqueInput], {nullable:true})
    @Type(() => PropertyWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PropertyWhereUniqueInput, 'id' | 'uniqueCode'>>;
}
