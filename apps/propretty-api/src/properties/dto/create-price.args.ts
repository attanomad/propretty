import { Field, InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { Transform } from 'class-transformer';
import {
  GraphQLDecimal,
  transformToDecimal,
} from 'prisma-graphql-type-decimal';

@InputType()
export class CreatePriceInput {
  @Field()
  currency: string;

  @Field((type) => GraphQLDecimal)
  @Transform(transformToDecimal)
  price: Decimal;
}
