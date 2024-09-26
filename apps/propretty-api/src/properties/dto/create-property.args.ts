import { Field, Float, InputType } from '@nestjs/graphql';
import { PropertyCommercialStatus, PropertyFurnishing } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';
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

  @Field((type) => Float, { nullable: true })
  floorSize: Decimal;

  @Field((type) => Float, { nullable: true })
  landSize: Decimal;

  @Field((type) => PropertyFurnishing, { nullable: true })
  furnishing: PropertyFurnishing;

  @Field((type) => [CreatePriceInput], { nullable: true })
  priceList?: CreatePriceInput[];

  @Field((type) => [String], { nullable: 'itemsAndList' })
  amenityIds?: string[];

  @Field((type) => [String], { nullable: 'itemsAndList' })
  mediaList?: string[];
}
