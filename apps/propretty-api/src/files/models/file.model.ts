import { Field, ObjectType } from '@nestjs/graphql';
import { File } from 'src/@generated/file/file.model';

@ObjectType()
export class FileWithUrl extends File {
  /**
   * Add this field becuase it is not in the Prisma schema
   * but is a computed field by Prisma client extension
   */
  @Field()
  url: string;
}
// @ObjectType()
// export class File {
//   @Field()
//   id: string;

//   @Field()
//   name: string;

//   @Field()
//   mimetype: string;

//   @Field()
//   url: string;
// }
