import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { Type } from 'class-transformer';
import { FileUpdateWithoutPropertyInput } from './file-update-without-property.input';
import { FileCreateWithoutPropertyInput } from './file-create-without-property.input';

@InputType()
export class FileUpsertWithWhereUniqueWithoutPropertyInput {

    @Field(() => FileWhereUniqueInput, {nullable:false})
    @Type(() => FileWhereUniqueInput)
    where!: Prisma.AtLeast<FileWhereUniqueInput, 'id'>;

    @Field(() => FileUpdateWithoutPropertyInput, {nullable:false})
    @Type(() => FileUpdateWithoutPropertyInput)
    update!: FileUpdateWithoutPropertyInput;

    @Field(() => FileCreateWithoutPropertyInput, {nullable:false})
    @Type(() => FileCreateWithoutPropertyInput)
    create!: FileCreateWithoutPropertyInput;
}
