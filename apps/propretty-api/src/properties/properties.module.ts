import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PropertiesController } from './properties.controller';
import { PropertiesService } from './properties.service';

@Module({
  controllers: [PropertiesController],
  providers: [PropertiesService, PrismaService],
})
export class PropertiesModule {}
