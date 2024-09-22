import { Field, ObjectType } from '@nestjs/graphql';
import { Amenity } from 'src/amenities/models/amenity.model';
import { User } from 'src/users/models/user.model';
import { PropertyType } from '../../property-types/models/property-type.model';
import { PropertyMedia } from './property-media.model';

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

  @Field((type) => [PropertyMedia], { nullable: 'items' })
  mediaList: PropertyMedia[];

  @Field((type) => [Amenity], { nullable: 'items' })
  amenities: Amenity[];

  @Field()
  userId: string;

  @Field((type) => User)
  user: User;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
