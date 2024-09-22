import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';
import { S3Module } from 'nestjs-s3';
import { join } from 'path';
import { AmenitiesModule } from './amenities/amenities.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CaslModule } from './casl/casl.module';
import configuration from './config/configuration';
import { FilesModule } from './files/files.module';
import { PrismaModule } from './prisma/prisma.module';
import { PropertiesModule } from './properties/properties.module';
import { PropertyTypesModule } from './property-types/property-types.module';
import { UnifiedResponseInterceptor } from './unified-response.interceptor';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // autoSchemaFile: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    S3Module.forRootAsync({
      useFactory: (configService: ConfigService) => {
        return {
          config: {
            credentials: configService.getOrThrow('storage.credentials'),
            endpoint: configService.getOrThrow('storage.endpoint'),
            region: configService.getOrThrow('storage.region'),
            forcePathStyle: true,
          },
        };
      },
      inject: [ConfigService],
    }),
    AuthModule,
    UsersModule,
    PropertiesModule,
    PropertyTypesModule,
    AmenitiesModule,
    FilesModule,
    PrismaModule,
    CaslModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: UnifiedResponseInterceptor,
    },
  ],
})
export class AppModule {}
