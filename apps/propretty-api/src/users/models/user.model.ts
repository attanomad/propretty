import { Field, ObjectType } from '@nestjs/graphql';
import { Role } from 'src/roles/models/role.model';

@ObjectType()
export class User {
  @Field()
  id: string;

  @Field()
  username: string;

  @Field()
  hashedPassword: string;

  @Field((type) => [Role])
  roles: Role[];
}
