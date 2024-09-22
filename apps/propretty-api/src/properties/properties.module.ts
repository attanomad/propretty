import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PropertiesController } from './properties.controller';
import { PropertiesResolver } from './properties.resolver';
import { PropertiesService } from './properties.service';

@Module({
  controllers: [PropertiesController],
  providers: [PropertiesService, PrismaService, PropertiesResolver],
})
export class PropertiesModule {}
