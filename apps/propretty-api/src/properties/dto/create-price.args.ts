import { Field, Float, InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';

@InputType()
export class CreatePriceInput {
  @Field()
  currency: string;

  @Field((type) => Float)
  price: Decimal;
}
