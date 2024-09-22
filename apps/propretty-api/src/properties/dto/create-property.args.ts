import { Field, InputType } from '@nestjs/graphql';
import { Status } from '../enums/status.enum';

@InputType()
export class CreatePropertyInput {
  @Field()
  name: string;

  @Field((type) => Status)
  status: Status;

  @Field({ nullable: true })
  uniqueCode?: string;

  @Field()
  typeId: string;

  @Field((type) => [String], { nullable: 'itemsAndList' })
  amenityIds?: string[];

  @Field((type) => [String], { nullable: 'itemsAndList' })
  mediaList?: string[];
}
