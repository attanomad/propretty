import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Role } from '../role/role.model';
import { Permission } from '../permission/permission.model';
import { Property } from '../property/property.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    hashedPassword!: string;

    @Field(() => [Role], {nullable:true})
    roles?: Array<Role>;

    @Field(() => [Permission], {nullable:true})
    permissions?: Array<Permission>;

    @Field(() => [Property], {nullable:true})
    assignedProperties?: Array<Property>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
