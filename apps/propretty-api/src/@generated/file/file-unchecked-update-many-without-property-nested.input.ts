import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutPropertyInput } from './file-create-without-property.input';
import { Type } from 'class-transformer';
import { FileCreateOrConnectWithoutPropertyInput } from './file-create-or-connect-without-property.input';
import { FileUpsertWithWhereUniqueWithoutPropertyInput } from './file-upsert-with-where-unique-without-property.input';
import { Prisma } from '@prisma/client';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileUpdateWithWhereUniqueWithoutPropertyInput } from './file-update-with-where-unique-without-property.input';
import { FileUpdateManyWithWhereWithoutPropertyInput } from './file-update-many-with-where-without-property.input';
import { FileScalarWhereInput } from './file-scalar-where.input';

@InputType()
export class FileUncheckedUpdateManyWithoutPropertyNestedInput {

    @Field(() => [FileCreateWithoutPropertyInput], {nullable:true})
    @Type(() => FileCreateWithoutPropertyInput)
    create?: Array<FileCreateWithoutPropertyInput>;

    @Field(() => [FileCreateOrConnectWithoutPropertyInput], {nullable:true})
    @Type(() => FileCreateOrConnectWithoutPropertyInput)
    connectOrCreate?: Array<FileCreateOrConnectWithoutPropertyInput>;

    @Field(() => [FileUpsertWithWhereUniqueWithoutPropertyInput], {nullable:true})
    @Type(() => FileUpsertWithWhereUniqueWithoutPropertyInput)
    upsert?: Array<FileUpsertWithWhereUniqueWithoutPropertyInput>;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    set?: Array<Prisma.AtLeast<FileWhereUniqueInput, 'id'>>;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<FileWhereUniqueInput, 'id'>>;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<FileWhereUniqueInput, 'id'>>;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FileWhereUniqueInput, 'id'>>;

    @Field(() => [FileUpdateWithWhereUniqueWithoutPropertyInput], {nullable:true})
    @Type(() => FileUpdateWithWhereUniqueWithoutPropertyInput)
    update?: Array<FileUpdateWithWhereUniqueWithoutPropertyInput>;

    @Field(() => [FileUpdateManyWithWhereWithoutPropertyInput], {nullable:true})
    @Type(() => FileUpdateManyWithWhereWithoutPropertyInput)
    updateMany?: Array<FileUpdateManyWithWhereWithoutPropertyInput>;

    @Field(() => [FileScalarWhereInput], {nullable:true})
    @Type(() => FileScalarWhereInput)
    deleteMany?: Array<FileScalarWhereInput>;
}
