import { Args, Query, Resolver } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { FindPropertiesArgs } from './dto/find-properties.args';
import { Property } from './models/property.model';

@Resolver()
export class PropertiesResolver {
  constructor(private prismaService: PrismaService) {}

  @Query((returns) => [Property])
  properties(@Args() args: FindPropertiesArgs) {
    const prismaArgs: Prisma.PropertyFindManyArgs = {
      omit: { typeId: true },
      include: { type: true },
    };

    if (args.id) {
      prismaArgs.where = { id: args.id };
    }

    if (args.name) {
      prismaArgs.where = {
        ...(prismaArgs.where ?? {}),
        name: { contains: args.name, mode: 'insensitive' },
      };
    }

    if (args.typeId) {
      prismaArgs.where = {
        ...(prismaArgs.where ?? {}),
        typeId: args.typeId,
      };
    }

    return this.prismaService.property.findMany(prismaArgs);
  }
}
