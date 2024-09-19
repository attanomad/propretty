import { Field, ObjectType } from '@nestjs/graphql';
import { PropertyType } from './property-type.model';

@ObjectType()
export class Property {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field((type) => String, { nullable: true })
  uniqueCode: string;

  @Field((type) => PropertyType)
  type: PropertyType;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
