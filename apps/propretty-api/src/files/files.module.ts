import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { FilesController } from './files.controller';
import { FilesResolver } from './files.resolver';

@Module({
  providers: [FilesResolver, PrismaService],
  controllers: [FilesController],
})
export class FilesModule {}
