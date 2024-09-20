import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateAmenityInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;
}
