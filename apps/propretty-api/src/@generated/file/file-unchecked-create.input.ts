import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyUncheckedCreateNestedManyWithoutMediaListInput } from '../property/property-unchecked-create-nested-many-without-media-list.input';
import { Type } from 'class-transformer';

@InputType()
export class FileUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    path!: string;

    @Field(() => String, {nullable:false})
    mimetype!: string;

    @Field(() => String, {nullable:false})
    size!: bigint | number;

    @Field(() => PropertyUncheckedCreateNestedManyWithoutMediaListInput, {nullable:true})
    @Type(() => PropertyUncheckedCreateNestedManyWithoutMediaListInput)
    Property?: PropertyUncheckedCreateNestedManyWithoutMediaListInput;
}
