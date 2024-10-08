import { ObjectType, PickType } from '@nestjs/graphql';
import { FileWithUrl } from 'src/files/models/file.model';

@ObjectType()
export class PropertyMedia extends PickType(FileWithUrl, [
  'id',
  'url',
  'mimetype',
] as const) {}
