import {
  Controller,
  Get,
  Inject,
  Param,
  Post,
  StreamableFile,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FileInterceptor } from '@nestjs/platform-express';
import { InjectS3, S3 } from 'nestjs-s3';
import { EXTENDED_PRISMA_SERVICE } from 'src/prisma/constants';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('files')
export class FilesController {
  constructor(
    private configService: ConfigService,
    @InjectS3() private s3: S3,
    @Inject(EXTENDED_PRISMA_SERVICE) private prismaService: PrismaService,
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
        omit: { size: true },
      });

      return result;
    } catch (e) {
      if (e instanceof Error) {
        throw new Error(`Failed to store file info in database: ${e.message}`);
      }

      throw e;
    }
  }

  @Get(':id')
  async getFile(@Param('id') id: string) {
    const file = await this.prismaService.file.findUnique({
      where: { id },
      select: { id: true, url: true } as any, // TODO: Make it type-safety!!!
    });

    return file;
  }

  @Get('static/:id')
  async getStaticFile(@Param('id') id: string) {
    const fileInfo = await this.prismaService.file.findUnique({
      where: { id },
      select: { id: true, path: true, mimetype: true },
    });
    const [bucketName, ...keys] = fileInfo.path.split('/');

    try {
      const fileObj = await this.s3.getObject({
        Bucket: bucketName,
        Key: keys.join('/'),
      });
      const file = await fileObj.Body.transformToByteArray();

      return new StreamableFile(file, {
        type: fileInfo.mimetype,
      });
    } catch (e) {
      if (e instanceof Error) {
        throw new Error(
          `Failed to get the file from object storage: ${e.message}`,
        );
      }

      throw e;
    }
  }
}
