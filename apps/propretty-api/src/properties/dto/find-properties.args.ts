import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class FindPropertiesArgs {
  @Field({ nullable: true })
  id?: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  typeId?: string;
}
