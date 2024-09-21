import { PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { InjectS3, S3 } from 'nestjs-s3';
import { EXTENDED_PRISMA_SERVICE } from 'src/prisma/constants';
import { PrismaService } from 'src/prisma/prisma.service';
import { File } from './models/file.model';

@Resolver()
export class FilesResolver {
  constructor(
    private configService: ConfigService,
    @InjectS3() private s3: S3,
    @Inject(EXTENDED_PRISMA_SERVICE) private prismaService: PrismaService,
  ) {}

  @Query((returns) => [File])
  async files() {
    const files = await this.prismaService.file.findMany();

    return files;
  }

  @Mutation((returns) => String)
  async generateSignedUrl(
    @Args('name') name: string,
    @Args('mimeType') mimeType: string,
  ) {
    try {
      const bucketName = this.configService.getOrThrow('storage.bucketName');
      const signedUrl = await this.generatePresignedUrl(
        bucketName,
        name,
        mimeType,
      );

      return signedUrl;
    } catch (e) {
      console.log('e: ', e);

      throw e;
    }
  }

  private async generatePresignedUrl(bucketName, key, contentType) {
    // Create a PutObjectCommand with the desired bucket, key, and content type
    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: key, // Name of the file (e.g., 'uploads/example.jpg')
      ContentType: contentType, // MIME type (e.g., 'image/jpeg')
    });

    // Generate the signed URL
    const signedUrl = await getSignedUrl(this.s3, command, {
      expiresIn: 3600, // URL expires in 1 hour (3600 seconds)
    });

    return signedUrl;
  }
}
