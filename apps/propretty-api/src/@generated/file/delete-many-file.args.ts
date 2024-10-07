import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FileWhereInput } from './file-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyFileArgs {

    @Field(() => FileWhereInput, {nullable:true})
    @Type(() => FileWhereInput)
    where?: FileWhereInput;
}
