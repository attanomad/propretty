import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';
import { extendPrismaClient } from './prisma.extension';

@Injectable()
export class PrismaService implements OnModuleInit {
  private prisma: ReturnType<typeof extendPrismaClient>;

  constructor(private configService: ConfigService) {
    this.prisma = extendPrismaClient(new PrismaClient(), {
      saltRounds: configService.getOrThrow<number>(
        'security.password.saltRounds',
      ),
      fileHost: configService.getOrThrow('host'),
    });
  }

  get client() {
    return this.prisma;
  }

  async onModuleInit() {
    await this.prisma.$connect();
  }
}
