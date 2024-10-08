import { Field, ObjectType } from '@nestjs/graphql';
import { Property as PropertyGenerated } from 'src/@generated/property/property.model';
import { FileWithUrl } from 'src/files/models/file.model';

@ObjectType()
export class Property extends PropertyGenerated {
  @Field(() => [FileWithUrl], { nullable: true })
  mediaList?: Array<FileWithUrl>;
}
// @ObjectType()
// export class Property {
//   @Field()
//   id: string;

//   @Field()
//   name: string;

//   @Field({ nullable: true })
//   description: string;

//   @Field((type) => PropertyStatus)
//   status: PropertyStatus;

//   @Field((type) => [Price])
//   priceList: Price[];

//   @Field((type) => PropertyCommercialStatus, { nullable: true })
//   commercialStatus: PropertyCommercialStatus;

//   @Field((type) => String, { nullable: true })
//   uniqueCode: string;

//   @Field((type) => GraphQLDecimal, { nullable: true })
//   @Transform(transformToDecimal)
//   floorSize: Decimal;

//   @Field((type) => GraphQLDecimal, { nullable: true })
//   @Transform(transformToDecimal)
//   landSize: Decimal;

//   @Field((type) => PropertyFurnishing, { nullable: true })
//   furnishing: PropertyFurnishing;

//   @Field((type) => PropertyType)
//   type: PropertyType;

//   @Field((type) => [PropertyMedia])
//   mediaList: PropertyMedia[];

//   @Field((type) => [Amenity])
//   amenities: Amenity[];

//   @Field((type) => Location, { nullable: true })
//   location: Location;

//   @Field()
//   createdAt: Date;

//   @Field()
//   updatedAt: Date;
// }

// registerEnumType(PropertyCommercialStatus, {
//   name: 'PropertyCommercialStatus',
// });
// registerEnumType(PropertyFurnishing, { name: 'PropertyFurnishing' });
// registerEnumType(PropertyStatus, { name: 'PropertyStatus' });
