import { registerEnumType } from '@nestjs/graphql';

export enum FileScalarFieldEnum {
    id = "id",
    name = "name",
    path = "path",
    mimetype = "mimetype",
    size = "size"
}


registerEnumType(FileScalarFieldEnum, { name: 'FileScalarFieldEnum', description: undefined })
