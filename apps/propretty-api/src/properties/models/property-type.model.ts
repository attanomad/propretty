import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PropertyType {
  @Field((type) => String)
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;
}
