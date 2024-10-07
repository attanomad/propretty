import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class PropertyAmenityScalarWhereInput {

    @Field(() => [PropertyAmenityScalarWhereInput], {nullable:true})
    AND?: Array<PropertyAmenityScalarWhereInput>;

    @Field(() => [PropertyAmenityScalarWhereInput], {nullable:true})
    OR?: Array<PropertyAmenityScalarWhereInput>;

    @Field(() => [PropertyAmenityScalarWhereInput], {nullable:true})
    NOT?: Array<PropertyAmenityScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeFilter;
}
