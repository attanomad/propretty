import { registerEnumType } from '@nestjs/graphql';

export enum PropertyOwnerScalarFieldEnum {
    id = "id",
    firstName = "firstName",
    lastName = "lastName",
    profilePictureUrl = "profilePictureUrl",
    dob = "dob"
}


registerEnumType(PropertyOwnerScalarFieldEnum, { name: 'PropertyOwnerScalarFieldEnum', description: undefined })
