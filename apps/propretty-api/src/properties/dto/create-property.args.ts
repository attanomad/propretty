import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePropertyInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  uniqueCode?: string;

  @Field()
  typeId: string;

  @Field((type) => [String], { nullable: 'itemsAndList' })
  amenityIds?: string[];
}
