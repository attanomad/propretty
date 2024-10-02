import { Field, ObjectType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { Transform } from 'class-transformer';
import {
  GraphQLDecimal,
  transformToDecimal,
} from 'prisma-graphql-type-decimal';

@ObjectType()
export class Location {
  @Field()
  id: string;

  @Field({ nullable: true })
  address?: string;

  @Field({ nullable: true })
  subdistrict?: string;

  @Field({ nullable: true })
  district?: string;

  @Field({ nullable: true })
  province?: string;

  @Field({ nullable: true })
  country?: string;

  @Field({ nullable: true })
  postalCode?: string;

  @Field((type) => GraphQLDecimal, { nullable: true })
  @Transform(transformToDecimal)
  latitude?: Decimal;

  @Field((type) => GraphQLDecimal, { nullable: true })
  @Transform(transformToDecimal)
  longitude?: Decimal;
}
