import { ObjectType, PickType } from '@nestjs/graphql';
import { File } from 'src/files/models/file.model';

@ObjectType()
export class PropertyMedia extends PickType(File, [
  'id',
  'url',
  'mimetype',
] as const) {}
