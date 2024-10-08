import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyUpdateWithoutLeasesInput } from './property-update-without-leases.input';
import { Type } from 'class-transformer';
import { PropertyCreateWithoutLeasesInput } from './property-create-without-leases.input';
import { PropertyWhereInput } from './property-where.input';

@InputType()
export class PropertyUpsertWithoutLeasesInput {

    @Field(() => PropertyUpdateWithoutLeasesInput, {nullable:false})
    @Type(() => PropertyUpdateWithoutLeasesInput)
    update!: PropertyUpdateWithoutLeasesInput;

    @Field(() => PropertyCreateWithoutLeasesInput, {nullable:false})
    @Type(() => PropertyCreateWithoutLeasesInput)
    create!: PropertyCreateWithoutLeasesInput;

    @Field(() => PropertyWhereInput, {nullable:true})
    @Type(() => PropertyWhereInput)
    where?: PropertyWhereInput;
}
