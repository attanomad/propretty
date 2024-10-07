import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutPropertyInput } from './file-create-without-property.input';
import { Type } from 'class-transformer';
import { FileCreateOrConnectWithoutPropertyInput } from './file-create-or-connect-without-property.input';
import { Prisma } from '@prisma/client';
import { FileWhereUniqueInput } from './file-where-unique.input';

@InputType()
export class FileCreateNestedManyWithoutPropertyInput {

    @Field(() => [FileCreateWithoutPropertyInput], {nullable:true})
    @Type(() => FileCreateWithoutPropertyInput)
    create?: Array<FileCreateWithoutPropertyInput>;

    @Field(() => [FileCreateOrConnectWithoutPropertyInput], {nullable:true})
    @Type(() => FileCreateOrConnectWithoutPropertyInput)
    connectOrCreate?: Array<FileCreateOrConnectWithoutPropertyInput>;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FileWhereUniqueInput, 'id'>>;
}
