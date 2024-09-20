import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class FindAmenitiesArgs {
  @Field({ nullable: true })
  id?: string;

  @Field({ nullable: true })
  name?: string;
}
