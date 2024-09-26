import { Field, Float, ObjectType, registerEnumType } from '@nestjs/graphql';
import { PropertyCommercialStatus, PropertyFurnishing } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';
import { Amenity } from 'src/amenities/models/amenity.model';
import { User } from 'src/users/models/user.model';
import { PropertyType } from '../../property-types/models/property-type.model';
import { Price } from './price.model';
import { PropertyMedia } from './property-media.model';

@ObjectType()
export class Property {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  description: string;

  @Field()
  status: string;

  @Field((type) => [Price])
  priceList: Price[];

  @Field((type) => PropertyCommercialStatus, { nullable: true })
  commercialStatus: PropertyCommercialStatus;

  @Field((type) => String, { nullable: true })
  uniqueCode: string;

  @Field((type) => Float, { nullable: true })
  floorSize: Decimal;

  @Field((type) => Float, { nullable: true })
  landSize: Decimal;

  @Field((type) => PropertyFurnishing, { nullable: true })
  furnishing: PropertyFurnishing;

  @Field((type) => PropertyType)
  type: PropertyType;

  @Field((type) => [PropertyMedia], { nullable: 'items' })
  mediaList: PropertyMedia[];

  @Field((type) => [Amenity], { nullable: 'items' })
  amenities: Amenity[];

  @Field()
  authorId: string;

  @Field((type) => User)
  author: User;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

registerEnumType(PropertyCommercialStatus, {
  name: 'PropertyCommercialStatus',
});
registerEnumType(PropertyFurnishing, { name: 'PropertyFurnishing' });
