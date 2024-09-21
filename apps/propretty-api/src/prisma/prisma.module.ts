import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EXTENDED_PRISMA_SERVICE } from './constants';
import { PrismaService } from './prisma.service';

@Module({
  providers: [
    {
      provide: EXTENDED_PRISMA_SERVICE,
      useFactory(configService: ConfigService) {
        return new PrismaService().$extends({
          result: {
            file: {
              url: {
                needs: {
                  id: true,
                },
                compute: (file) =>
                  `http://${configService.getOrThrow('host')}/files/static/${file.id}`,
              },
            },
          },
        });
      },
      inject: [ConfigService],
    },
  ],
  exports: [EXTENDED_PRISMA_SERVICE],
})
export class PrismaModule {}
