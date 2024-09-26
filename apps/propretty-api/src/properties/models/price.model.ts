import { Field, Float, ObjectType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';

@ObjectType()
export class Price {
  @Field()
  id: string;

  @Field()
  currency: string;

  @Field((type) => Float)
  price: Decimal;
}
