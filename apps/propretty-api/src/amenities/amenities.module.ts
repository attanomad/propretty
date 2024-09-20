import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AmenitiesResolver } from './amenities.resolver';

@Module({
  providers: [PrismaService, AmenitiesResolver],
})
export class AmenitiesModule {}
