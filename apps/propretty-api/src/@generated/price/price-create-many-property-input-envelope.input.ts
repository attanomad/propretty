import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PriceCreateManyPropertyInput } from './price-create-many-property.input';
import { Type } from 'class-transformer';

@InputType()
export class PriceCreateManyPropertyInputEnvelope {

    @Field(() => [PriceCreateManyPropertyInput], {nullable:false})
    @Type(() => PriceCreateManyPropertyInput)
    data!: Array<PriceCreateManyPropertyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
