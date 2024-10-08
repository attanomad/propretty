import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PropertyMaintenanceRequestCount {

    @Field(() => Int, {nullable:false})
    activities?: number;
}
