import { Field, InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { Transform } from 'class-transformer';
import {
  GraphQLDecimal,
  transformToDecimal,
} from 'prisma-graphql-type-decimal';
import { LocationUpsertWithoutPropertyInput } from 'src/@generated/location/location-upsert-without-property.input';
import { PriceCreateInput } from 'src/@generated/price/price-create.input';
import { PropertyCommercialStatus } from 'src/@generated/prisma/property-commercial-status.enum';
import { PropertyFurnishing } from 'src/@generated/prisma/property-furnishing.enum';
import { PropertyStatus } from 'src/@generated/prisma/property-status.enum';

@InputType()
export class CreatePropertyInput {
  @Field()
  name: string;

  @Field((type) => PropertyStatus)
  status: PropertyStatus;

  @Field({ nullable: true })
  description: string;

  @Field({ nullable: true })
  uniqueCode?: string;

  @Field()
  typeId: string;

  @Field((type) => PropertyCommercialStatus, { nullable: true })
  commercialStatus: PropertyCommercialStatus;

  @Field((type) => GraphQLDecimal, { nullable: true })
  @Transform(transformToDecimal)
  floorSize: Decimal;

  @Field((type) => GraphQLDecimal, { nullable: true })
  @Transform(transformToDecimal)
  landSize: Decimal;

  @Field((type) => PropertyFurnishing, { nullable: true })
  furnishing: PropertyFurnishing;

  @Field((type) => [PriceCreateInput], { nullable: true })
  priceList?: PriceCreateInput[];

  @Field((type) => [String], { nullable: 'itemsAndList' })
  amenityIds?: string[];

  @Field((type) => [String], { nullable: 'itemsAndList' })
  mediaList?: string[];

  @Field((type) => LocationUpsertWithoutPropertyInput, { nullable: true })
  location?: LocationUpsertWithoutPropertyInput;
}
