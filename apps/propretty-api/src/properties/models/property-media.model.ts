import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PropertyMedia {
  @Field()
  id: string;

  @Field()
  url: string;
}
