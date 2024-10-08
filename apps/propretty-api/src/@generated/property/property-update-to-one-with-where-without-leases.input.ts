import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyWhereInput } from './property-where.input';
import { Type } from 'class-transformer';
import { PropertyUpdateWithoutLeasesInput } from './property-update-without-leases.input';

@InputType()
export class PropertyUpdateToOneWithWhereWithoutLeasesInput {

    @Field(() => PropertyWhereInput, {nullable:true})
    @Type(() => PropertyWhereInput)
    where?: PropertyWhereInput;

    @Field(() => PropertyUpdateWithoutLeasesInput, {nullable:false})
    @Type(() => PropertyUpdateWithoutLeasesInput)
    data!: PropertyUpdateWithoutLeasesInput;
}
