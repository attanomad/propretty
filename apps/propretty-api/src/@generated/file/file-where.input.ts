import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { PropertyListRelationFilter } from '../property/property-list-relation-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class FileWhereInput {

    @Field(() => [FileWhereInput], {nullable:true})
    AND?: Array<FileWhereInput>;

    @Field(() => [FileWhereInput], {nullable:true})
    OR?: Array<FileWhereInput>;

    @Field(() => [FileWhereInput], {nullable:true})
    NOT?: Array<FileWhereInput>;

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

    @Field(() => PropertyListRelationFilter, {nullable:true})
    @Type(() => PropertyListRelationFilter)
    Property?: PropertyListRelationFilter;
}
