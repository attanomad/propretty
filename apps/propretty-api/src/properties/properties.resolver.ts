import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePropertyInput } from './dto/create-property.args';
import { FindPropertiesArgs } from './dto/find-properties.args';
import { Property } from './models/property.model';

@Resolver()
export class PropertiesResolver {
  constructor(private prismaService: PrismaService) {}

  @Mutation((returns) => Property)
  async createProperty(@Args('createPropertyData') args: CreatePropertyInput) {
    try {
      const result = await this.prismaService.property.create({
        omit: { typeId: true },
        data: {
          name: args.name,
          type: { connect: { id: args.typeId } },
          uniqueCode: args.uniqueCode,
        },
        include: { type: true, mediaList: true },
      });

      console.log('result: ', result);

      return result;
    } catch (e) {
      console.log('e: ', e);
      if (e instanceof PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          throw new Error(`Property already exists`);
        }
      }

      throw e;
    }
  }

  @Query((returns) => [Property])
  properties(@Args() args: FindPropertiesArgs) {
    const prismaArgs: Prisma.PropertyFindManyArgs = {
      omit: { typeId: true },
      include: { type: true, mediaList: true },
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
