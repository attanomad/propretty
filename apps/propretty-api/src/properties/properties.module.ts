import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PropertiesController } from './properties.controller';
import { PropertiesService } from './properties.service';
import { PropertiesResolver } from './properties.resolver';

@Module({
  controllers: [PropertiesController],
  providers: [PropertiesService, PrismaService, PropertiesResolver],
})
export class PropertiesModule {}
