import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { FilesController } from './files.controller';
import { FilesResolver } from './files.resolver';

@Module({
  imports: [PrismaModule],
  providers: [FilesResolver],
  controllers: [FilesController],
})
export class FilesModule {}
