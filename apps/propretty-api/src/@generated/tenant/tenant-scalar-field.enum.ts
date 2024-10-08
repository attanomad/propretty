import { registerEnumType } from '@nestjs/graphql';

export enum TenantScalarFieldEnum {
    id = "id",
    nationalId = "nationalId",
    firstName = "firstName",
    lastName = "lastName",
    email = "email",
    phoneNumber = "phoneNumber",
    dateOfBirth = "dateOfBirth",
    gender = "gender",
    address = "address",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(TenantScalarFieldEnum, { name: 'TenantScalarFieldEnum', description: undefined })
