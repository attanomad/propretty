import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePropertyTypeInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;
}
