import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { Type } from 'class-transformer';
import { FileCreateWithoutPropertyInput } from './file-create-without-property.input';

@InputType()
export class FileCreateOrConnectWithoutPropertyInput {

    @Field(() => FileWhereUniqueInput, {nullable:false})
    @Type(() => FileWhereUniqueInput)
    where!: Prisma.AtLeast<FileWhereUniqueInput, 'id'>;

    @Field(() => FileCreateWithoutPropertyInput, {nullable:false})
    @Type(() => FileCreateWithoutPropertyInput)
    create!: FileCreateWithoutPropertyInput;
}
