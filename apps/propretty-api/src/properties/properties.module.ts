import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { PropertiesController } from './properties.controller';
import { PropertiesResolver } from './properties.resolver';
import { PropertiesService } from './properties.service';

@Module({
  imports: [PrismaModule],
  controllers: [PropertiesController],
  providers: [PropertiesService, PrismaService, PropertiesResolver],
})
export class PropertiesModule {}
