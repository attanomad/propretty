import { Field, ObjectType } from '@nestjs/graphql';
import { Amenity } from 'src/amenities/models/amenity.model';
import { File } from '../../files/models/file.model';
import { PropertyType } from '../../property-types/models/property-type.model';

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

  @Field((type) => [Amenity], { nullable: 'items' })
  amenities: Amenity[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
