import { Field, ObjectType } from '@nestjs/graphql';
import { PropertyType } from '../../property-types/models/property-type.model';
import { File } from './file.model';

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

  @Field((type) => [File], { nullable: 'items' })
  mediaList: File[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
