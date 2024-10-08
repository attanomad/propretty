import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class LeaseCount {

    @Field(() => Int, {nullable:false})
    maintenanceRequests?: number;
}
