import { Field, InputType } from '@nestjs/graphql';
import { PropertyCommercialStatus, PropertyFurnishing } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';
import { Transform } from 'class-transformer';
import {
  GraphQLDecimal,
  transformToDecimal,
} from 'prisma-graphql-type-decimal';
import { UpsertLocationInput } from 'src/location/dto/upsert-location.args';
import { Status } from '../enums/status.enum';
import { CreatePriceInput } from './create-price.args';

@InputType()
export class CreatePropertyInput {
  @Field()
  name: string;

  @Field((type) => Status)
  status: Status;

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

  @Field((type) => [CreatePriceInput], { nullable: true })
  priceList?: CreatePriceInput[];

  @Field((type) => [String], { nullable: 'itemsAndList' })
  amenityIds?: string[];

  @Field((type) => [String], { nullable: 'itemsAndList' })
  mediaList?: string[];

  @Field((type) => UpsertLocationInput, { nullable: true })
  location?: UpsertLocationInput;
}
