import { Field, InputType } from '@nestjs/graphql';

export const MutationParamKey = 'credentials';

@InputType()
export class LoginInput {
  @Field()
  username: string;

  @Field()
  password: string;
}
