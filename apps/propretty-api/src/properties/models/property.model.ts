import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import {
  PropertyCommercialStatus,
  PropertyFurnishing,
  PropertyStatus,
} from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';
import { Transform } from 'class-transformer';
import {
  GraphQLDecimal,
  transformToDecimal,
} from 'prisma-graphql-type-decimal';
import { Amenity } from 'src/amenities/models/amenity.model';
import { Location } from 'src/location/models/location.model';
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

  @Field((type) => PropertyStatus)
  status: PropertyStatus;

  @Field((type) => [Price])
  priceList: Price[];

  @Field((type) => PropertyCommercialStatus, { nullable: true })
  commercialStatus: PropertyCommercialStatus;

  @Field((type) => String, { nullable: true })
  uniqueCode: string;

  @Field((type) => GraphQLDecimal, { nullable: true })
  @Transform(transformToDecimal)
  floorSize: Decimal;

  @Field((type) => GraphQLDecimal, { nullable: true })
  @Transform(transformToDecimal)
  landSize: Decimal;

  @Field((type) => PropertyFurnishing, { nullable: true })
  furnishing: PropertyFurnishing;

  @Field((type) => PropertyType)
  type: PropertyType;

  @Field((type) => [PropertyMedia])
  mediaList: PropertyMedia[];

  @Field((type) => [Amenity])
  amenities: Amenity[];

  @Field()
  authorId: string;

  @Field((type) => User)
  author: User;

  @Field((type) => Location, { nullable: true })
  location: Location;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

registerEnumType(PropertyCommercialStatus, {
  name: 'PropertyCommercialStatus',
});
registerEnumType(PropertyFurnishing, { name: 'PropertyFurnishing' });
registerEnumType(PropertyStatus, { name: 'PropertyStatus' });
