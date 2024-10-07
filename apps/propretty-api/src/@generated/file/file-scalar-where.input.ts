import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BigIntFilter } from '../prisma/big-int-filter.input';

@InputType()
export class FileScalarWhereInput {

    @Field(() => [FileScalarWhereInput], {nullable:true})
    AND?: Array<FileScalarWhereInput>;

    @Field(() => [FileScalarWhereInput], {nullable:true})
    OR?: Array<FileScalarWhereInput>;

    @Field(() => [FileScalarWhereInput], {nullable:true})
    NOT?: Array<FileScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    path?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    mimetype?: StringFilter;

    @Field(() => BigIntFilter, {nullable:true})
    size?: BigIntFilter;
}
