import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PropertyTypeCreateManyInput } from './property-type-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPropertyTypeArgs {

    @Field(() => [PropertyTypeCreateManyInput], {nullable:false})
    @Type(() => PropertyTypeCreateManyInput)
    data!: Array<PropertyTypeCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
