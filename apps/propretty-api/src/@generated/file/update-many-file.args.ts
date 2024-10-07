import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FileUpdateManyMutationInput } from './file-update-many-mutation.input';
import { Type } from 'class-transformer';
import { FileWhereInput } from './file-where.input';

@ArgsType()
export class UpdateManyFileArgs {

    @Field(() => FileUpdateManyMutationInput, {nullable:false})
    @Type(() => FileUpdateManyMutationInput)
    data!: FileUpdateManyMutationInput;

    @Field(() => FileWhereInput, {nullable:true})
    @Type(() => FileWhereInput)
    where?: FileWhereInput;
}
