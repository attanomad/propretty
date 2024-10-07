import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyStatus } from '../prisma/property-status.enum';
import { PropertyCommercialStatus } from '../prisma/property-commercial-status.enum';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { PropertyFurnishing } from '../prisma/property-furnishing.enum';
import { FileUncheckedCreateNestedManyWithoutPropertyInput } from '../file/file-unchecked-create-nested-many-without-property.input';
import { PriceUncheckedCreateNestedManyWithoutPropertyInput } from '../price/price-unchecked-create-nested-many-without-property.input';
import { PropertyAmenityUncheckedCreateNestedManyWithoutPropertiesInput } from '../property-amenity/property-amenity-unchecked-create-nested-many-without-properties.input';
import { PropertyListingUncheckedCreateNestedManyWithoutPropertyInput } from '../property-listing/property-listing-unchecked-create-nested-many-without-property.input';
import { UserUncheckedCreateNestedManyWithoutAssignedPropertiesInput } from '../user/user-unchecked-create-nested-many-without-assigned-properties.input';

@InputType()
export class PropertyUncheckedCreateWithoutPropertyOwnerInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => PropertyStatus, {nullable:false})
    status!: keyof typeof PropertyStatus;

    @Field(() => PropertyCommercialStatus, {nullable:true})
    commercialStatus?: keyof typeof PropertyCommercialStatus;

    @Field(() => String, {nullable:true})
    uniqueCode?: string;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    floorSize?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    landSize?: Decimal;

    @Field(() => PropertyFurnishing, {nullable:true})
    furnishing?: keyof typeof PropertyFurnishing;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    typeId!: string;

    @Field(() => String, {nullable:true})
    locationId?: string;

    @Field(() => FileUncheckedCreateNestedManyWithoutPropertyInput, {nullable:true})
    @Type(() => FileUncheckedCreateNestedManyWithoutPropertyInput)
    mediaList?: FileUncheckedCreateNestedManyWithoutPropertyInput;

    @Field(() => PriceUncheckedCreateNestedManyWithoutPropertyInput, {nullable:true})
    @Type(() => PriceUncheckedCreateNestedManyWithoutPropertyInput)
    priceList?: PriceUncheckedCreateNestedManyWithoutPropertyInput;

    @Field(() => PropertyAmenityUncheckedCreateNestedManyWithoutPropertiesInput, {nullable:true})
    @Type(() => PropertyAmenityUncheckedCreateNestedManyWithoutPropertiesInput)
    amenities?: PropertyAmenityUncheckedCreateNestedManyWithoutPropertiesInput;

    @Field(() => PropertyListingUncheckedCreateNestedManyWithoutPropertyInput, {nullable:true})
    @Type(() => PropertyListingUncheckedCreateNestedManyWithoutPropertyInput)
    PropertyListing?: PropertyListingUncheckedCreateNestedManyWithoutPropertyInput;

    @Field(() => UserUncheckedCreateNestedManyWithoutAssignedPropertiesInput, {nullable:true})
    @Type(() => UserUncheckedCreateNestedManyWithoutAssignedPropertiesInput)
    assignedAgents?: UserUncheckedCreateNestedManyWithoutAssignedPropertiesInput;
}
