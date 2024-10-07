import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FileUncheckedCreateWithoutPropertyInput {

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
}
