import { Inject } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { EXTENDED_PRISMA_SERVICE } from 'src/prisma/constants';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePropertyInput } from './dto/create-property.args';
import { FindPropertiesArgs } from './dto/find-properties.args';
import { Property } from './models/property.model';

@Resolver()
export class PropertiesResolver {
  constructor(
    @Inject(EXTENDED_PRISMA_SERVICE) private prismaService: PrismaService,
  ) {}

  @Mutation((returns) => Property)
  async createProperty(@Args('createPropertyData') args: CreatePropertyInput) {
    console.log('args: ', args);
    try {
      const data: Prisma.PropertyCreateArgs['data'] = {
        name: args.name,
        type: { connect: { id: args.typeId } },
        uniqueCode: args.uniqueCode,
      };
      const amenities =
        args.amenityIds?.map<Prisma.PropertyAmenitiyWhereUniqueInput>((id) => ({
          id,
        }));
      const mediaList = args.mediaList?.map((id) => ({ id }));

      if (amenities && amenities.length > 0) {
        data.amenities = { connect: amenities };
      }

      if (mediaList && mediaList.length > 0) {
        data.mediaList = { connect: mediaList };
      }

      const result = await this.prismaService.property.create({
        omit: { typeId: true },
        data,
        include: { type: true, mediaList: true, amenities: true },
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
  async properties(@Args() args: FindPropertiesArgs) {
    const prismaArgs: Prisma.PropertyFindManyArgs = {
      omit: { typeId: true },
      include: {
        type: true,
        mediaList: true,
        amenities: true,
      },
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

    const result = await this.prismaService.property.findMany(prismaArgs);

    return result;
  }
}
