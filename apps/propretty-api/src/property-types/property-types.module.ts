import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PropertyTypesResolver } from './property-types.resolver';

@Module({
  providers: [PrismaService, PropertyTypesResolver],
})
export class PropertyTypesModule {}
