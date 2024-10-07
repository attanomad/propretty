import { registerEnumType } from '@nestjs/graphql';

export enum PermissionSubject {
    User = "User",
    Property = "Property",
    PropertyType = "PropertyType",
    Amenity = "Amenity",
    Client = "Client",
    Tenant = "Tenant",
    Agent = "Agent"
}


registerEnumType(PermissionSubject, { name: 'PermissionSubject', description: undefined })
