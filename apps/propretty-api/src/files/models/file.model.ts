import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class File {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  mimetype: string;

  @Field()
  url: string;
}
