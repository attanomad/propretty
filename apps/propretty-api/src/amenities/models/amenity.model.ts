import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Amenity {
  @Field((type) => String)
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;
}
