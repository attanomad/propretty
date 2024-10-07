import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ContactWhereInput {

    @Field(() => [ContactWhereInput], {nullable:true})
    AND?: Array<ContactWhereInput>;

    @Field(() => [ContactWhereInput], {nullable:true})
    OR?: Array<ContactWhereInput>;

    @Field(() => [ContactWhereInput], {nullable:true})
    NOT?: Array<ContactWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
