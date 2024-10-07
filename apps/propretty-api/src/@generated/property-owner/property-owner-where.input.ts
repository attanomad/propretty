import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { PropertyListRelationFilter } from '../property/property-list-relation-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class PropertyOwnerWhereInput {

    @Field(() => [PropertyOwnerWhereInput], {nullable:true})
    AND?: Array<PropertyOwnerWhereInput>;

    @Field(() => [PropertyOwnerWhereInput], {nullable:true})
    OR?: Array<PropertyOwnerWhereInput>;

    @Field(() => [PropertyOwnerWhereInput], {nullable:true})
    NOT?: Array<PropertyOwnerWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    firstName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    lastName?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    profilePictureUrl?: StringNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    dob?: DateTimeNullableFilter;

    @Field(() => PropertyListRelationFilter, {nullable:true})
    @Type(() => PropertyListRelationFilter)
    properties?: PropertyListRelationFilter;
}
