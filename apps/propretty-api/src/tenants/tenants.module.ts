import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TenantsResolver } from './tenants.resolver';
import { TenantsService } from './tenants.service';

@Module({
  providers: [TenantsResolver, TenantsService, PrismaService],
})
export class TenantsModule {}
