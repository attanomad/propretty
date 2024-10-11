import { Type } from '@nestjs/common';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class WithCount {
  @Field()
  count: number;
}

export function DataWithCount<T>(classRef: Type<T>): any {
  @ObjectType({ isAbstract: true })
  abstract class GenericResponseType extends WithCount {
    @Field(() => [classRef])
    data?: T[];
  }

  return GenericResponseType;
}
