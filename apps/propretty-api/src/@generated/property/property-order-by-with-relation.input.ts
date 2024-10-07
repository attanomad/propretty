import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { Type } from 'class-transformer';
import { FileOrderByRelationAggregateInput } from '../file/file-order-by-relation-aggregate.input';
import { PriceOrderByRelationAggregateInput } from '../price/price-order-by-relation-aggregate.input';
import { LocationOrderByWithRelationInput } from '../location/location-order-by-with-relation.input';
import { PropertyTypeOrderByWithRelationInput } from '../property-type/property-type-order-by-with-relation.input';
import { PropertyAmenityOrderByRelationAggregateInput } from '../property-amenity/property-amenity-order-by-relation-aggregate.input';
import { PropertyOwnerOrderByWithRelationInput } from '../property-owner/property-owner-order-by-with-relation.input';
import { PropertyListingOrderByRelationAggregateInput } from '../property-listing/property-listing-order-by-relation-aggregate.input';
import { UserOrderByRelationAggregateInput } from '../user/user-order-by-relation-aggregate.input';

@InputType()
export class PropertyOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    commercialStatus?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    uniqueCode?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    @Type(() => SortOrderInput)
    floorSize?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    @Type(() => SortOrderInput)
    landSize?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    furnishing?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    typeId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    locationId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    propertyOwnerId?: SortOrderInput;

    @Field(() => FileOrderByRelationAggregateInput, {nullable:true})
    @Type(() => FileOrderByRelationAggregateInput)
    mediaList?: FileOrderByRelationAggregateInput;

    @Field(() => PriceOrderByRelationAggregateInput, {nullable:true})
    @Type(() => PriceOrderByRelationAggregateInput)
    priceList?: PriceOrderByRelationAggregateInput;

    @Field(() => LocationOrderByWithRelationInput, {nullable:true})
    @Type(() => LocationOrderByWithRelationInput)
    location?: LocationOrderByWithRelationInput;

    @Field(() => PropertyTypeOrderByWithRelationInput, {nullable:true})
    @Type(() => PropertyTypeOrderByWithRelationInput)
    type?: PropertyTypeOrderByWithRelationInput;

    @Field(() => PropertyAmenityOrderByRelationAggregateInput, {nullable:true})
    @Type(() => PropertyAmenityOrderByRelationAggregateInput)
    amenities?: PropertyAmenityOrderByRelationAggregateInput;

    @Field(() => PropertyOwnerOrderByWithRelationInput, {nullable:true})
    @Type(() => PropertyOwnerOrderByWithRelationInput)
    PropertyOwner?: PropertyOwnerOrderByWithRelationInput;

    @Field(() => PropertyListingOrderByRelationAggregateInput, {nullable:true})
    @Type(() => PropertyListingOrderByRelationAggregateInput)
    PropertyListing?: PropertyListingOrderByRelationAggregateInput;

    @Field(() => UserOrderByRelationAggregateInput, {nullable:true})
    @Type(() => UserOrderByRelationAggregateInput)
    assignedAgents?: UserOrderByRelationAggregateInput;
}
