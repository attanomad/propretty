import { Field, ObjectType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { Transform } from 'class-transformer';
import {
  GraphQLDecimal,
  transformToDecimal,
} from 'prisma-graphql-type-decimal';

@ObjectType()
export class Price {
  @Field()
  id: string;

  @Field()
  currency: string;

  @Field((type) => GraphQLDecimal)
  @Transform(transformToDecimal)
  price: Decimal;
}
