import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FileInterceptor } from '@nestjs/platform-express';
import { InjectS3, S3 } from 'nestjs-s3';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('files')
export class FilesController {
  constructor(
    private configService: ConfigService,
    @InjectS3() private s3: S3,
    private prismaService: PrismaService,
  ) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log('file: ', file);

    const bucketName = this.configService.getOrThrow('storage.bucketName');
    const { originalname: filename, mimetype, size } = file;

    try {
      await this.s3.putObject({
        Bucket: bucketName,
        Key: filename,
        Body: file.buffer,
        ContentType: mimetype,
      });
    } catch (e) {
      if (e instanceof Error) {
        throw new Error(`Failed to put file into object storage: ${e.message}`);
      }

      throw e;
    }

    try {
      const result = await this.prismaService.file.create({
        data: {
          name: filename,
          path: `${bucketName}/${filename}`,
          mimetype: mimetype,
          size: BigInt(size),
        },
        select: { id: true },
      });

      return result;
    } catch (e) {
      if (e instanceof Error) {
        throw new Error(`Failed to store file info in database: ${e.message}`);
      }

      throw e;
    }
  }
}
