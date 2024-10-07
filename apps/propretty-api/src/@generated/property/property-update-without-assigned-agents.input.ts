import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumPropertyStatusFieldUpdateOperationsInput } from '../prisma/enum-property-status-field-update-operations.input';
import { EnumPropertyCommercialStatusFieldUpdateOperationsInput } from '../prisma/enum-property-commercial-status-field-update-operations.input';
import { NullableDecimalFieldUpdateOperationsInput } from '../prisma/nullable-decimal-field-update-operations.input';
import { Type } from 'class-transformer';
import { NullableEnumPropertyFurnishingFieldUpdateOperationsInput } from '../prisma/nullable-enum-property-furnishing-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { FileUpdateManyWithoutPropertyNestedInput } from '../file/file-update-many-without-property-nested.input';
import { PriceUpdateManyWithoutPropertyNestedInput } from '../price/price-update-many-without-property-nested.input';
import { LocationUpdateOneWithoutPropertyNestedInput } from '../location/location-update-one-without-property-nested.input';
import { PropertyTypeUpdateOneRequiredWithoutPropertyNestedInput } from '../property-type/property-type-update-one-required-without-property-nested.input';
import { PropertyAmenityUpdateManyWithoutPropertiesNestedInput } from '../property-amenity/property-amenity-update-many-without-properties-nested.input';
import { PropertyOwnerUpdateOneWithoutPropertiesNestedInput } from '../property-owner/property-owner-update-one-without-properties-nested.input';
import { PropertyListingUpdateManyWithoutPropertyNestedInput } from '../property-listing/property-listing-update-many-without-property-nested.input';

@InputType()
export class PropertyUpdateWithoutAssignedAgentsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => EnumPropertyStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumPropertyStatusFieldUpdateOperationsInput;

    @Field(() => EnumPropertyCommercialStatusFieldUpdateOperationsInput, {nullable:true})
    commercialStatus?: EnumPropertyCommercialStatusFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    uniqueCode?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableDecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => NullableDecimalFieldUpdateOperationsInput)
    floorSize?: NullableDecimalFieldUpdateOperationsInput;

    @Field(() => NullableDecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => NullableDecimalFieldUpdateOperationsInput)
    landSize?: NullableDecimalFieldUpdateOperationsInput;

    @Field(() => NullableEnumPropertyFurnishingFieldUpdateOperationsInput, {nullable:true})
    furnishing?: NullableEnumPropertyFurnishingFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => FileUpdateManyWithoutPropertyNestedInput, {nullable:true})
    @Type(() => FileUpdateManyWithoutPropertyNestedInput)
    mediaList?: FileUpdateManyWithoutPropertyNestedInput;

    @Field(() => PriceUpdateManyWithoutPropertyNestedInput, {nullable:true})
    @Type(() => PriceUpdateManyWithoutPropertyNestedInput)
    priceList?: PriceUpdateManyWithoutPropertyNestedInput;

    @Field(() => LocationUpdateOneWithoutPropertyNestedInput, {nullable:true})
    @Type(() => LocationUpdateOneWithoutPropertyNestedInput)
    location?: LocationUpdateOneWithoutPropertyNestedInput;

    @Field(() => PropertyTypeUpdateOneRequiredWithoutPropertyNestedInput, {nullable:true})
    @Type(() => PropertyTypeUpdateOneRequiredWithoutPropertyNestedInput)
    type?: PropertyTypeUpdateOneRequiredWithoutPropertyNestedInput;

    @Field(() => PropertyAmenityUpdateManyWithoutPropertiesNestedInput, {nullable:true})
    @Type(() => PropertyAmenityUpdateManyWithoutPropertiesNestedInput)
    amenities?: PropertyAmenityUpdateManyWithoutPropertiesNestedInput;

    @Field(() => PropertyOwnerUpdateOneWithoutPropertiesNestedInput, {nullable:true})
    @Type(() => PropertyOwnerUpdateOneWithoutPropertiesNestedInput)
    PropertyOwner?: PropertyOwnerUpdateOneWithoutPropertiesNestedInput;

    @Field(() => PropertyListingUpdateManyWithoutPropertyNestedInput, {nullable:true})
    @Type(() => PropertyListingUpdateManyWithoutPropertyNestedInput)
    PropertyListing?: PropertyListingUpdateManyWithoutPropertyNestedInput;
}
