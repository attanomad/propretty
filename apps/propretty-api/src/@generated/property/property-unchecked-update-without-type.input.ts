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
import { FileUncheckedUpdateManyWithoutPropertyNestedInput } from '../file/file-unchecked-update-many-without-property-nested.input';
import { PriceUncheckedUpdateManyWithoutPropertyNestedInput } from '../price/price-unchecked-update-many-without-property-nested.input';
import { PropertyAmenityUncheckedUpdateManyWithoutPropertiesNestedInput } from '../property-amenity/property-amenity-unchecked-update-many-without-properties-nested.input';
import { PropertyListingUncheckedUpdateManyWithoutPropertyNestedInput } from '../property-listing/property-listing-unchecked-update-many-without-property-nested.input';
import { UserUncheckedUpdateManyWithoutAssignedPropertiesNestedInput } from '../user/user-unchecked-update-many-without-assigned-properties-nested.input';
import { LeaseUncheckedUpdateManyWithoutPropertyNestedInput } from '../lease/lease-unchecked-update-many-without-property-nested.input';
import { PropertyMaintenanceRequestUncheckedUpdateManyWithoutPropertyNestedInput } from '../property-maintenance-request/property-maintenance-request-unchecked-update-many-without-property-nested.input';

@InputType()
export class PropertyUncheckedUpdateWithoutTypeInput {

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

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    locationId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    propertyOwnerId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => FileUncheckedUpdateManyWithoutPropertyNestedInput, {nullable:true})
    @Type(() => FileUncheckedUpdateManyWithoutPropertyNestedInput)
    mediaList?: FileUncheckedUpdateManyWithoutPropertyNestedInput;

    @Field(() => PriceUncheckedUpdateManyWithoutPropertyNestedInput, {nullable:true})
    @Type(() => PriceUncheckedUpdateManyWithoutPropertyNestedInput)
    priceList?: PriceUncheckedUpdateManyWithoutPropertyNestedInput;

    @Field(() => PropertyAmenityUncheckedUpdateManyWithoutPropertiesNestedInput, {nullable:true})
    @Type(() => PropertyAmenityUncheckedUpdateManyWithoutPropertiesNestedInput)
    amenities?: PropertyAmenityUncheckedUpdateManyWithoutPropertiesNestedInput;

    @Field(() => PropertyListingUncheckedUpdateManyWithoutPropertyNestedInput, {nullable:true})
    @Type(() => PropertyListingUncheckedUpdateManyWithoutPropertyNestedInput)
    PropertyListing?: PropertyListingUncheckedUpdateManyWithoutPropertyNestedInput;

    @Field(() => UserUncheckedUpdateManyWithoutAssignedPropertiesNestedInput, {nullable:true})
    @Type(() => UserUncheckedUpdateManyWithoutAssignedPropertiesNestedInput)
    assignedAgents?: UserUncheckedUpdateManyWithoutAssignedPropertiesNestedInput;

    @Field(() => LeaseUncheckedUpdateManyWithoutPropertyNestedInput, {nullable:true})
    @Type(() => LeaseUncheckedUpdateManyWithoutPropertyNestedInput)
    leases?: LeaseUncheckedUpdateManyWithoutPropertyNestedInput;

    @Field(() => PropertyMaintenanceRequestUncheckedUpdateManyWithoutPropertyNestedInput, {nullable:true})
    @Type(() => PropertyMaintenanceRequestUncheckedUpdateManyWithoutPropertyNestedInput)
    maintenanceRequests?: PropertyMaintenanceRequestUncheckedUpdateManyWithoutPropertyNestedInput;
}
