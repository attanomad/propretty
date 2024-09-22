import { Inject, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { JwtPayload } from 'src/auth/jwt.payload';
import { EXTENDED_PRISMA_SERVICE } from 'src/prisma/constants';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from 'src/user/user.decorator';
import { CreatePropertyInput } from './dto/create-property.args';
import { FindPropertiesArgs } from './dto/find-properties.args';
import { UpdatePropertyInput } from './dto/update-property.args';
import { Property } from './models/property.model';

@Resolver()
@UseGuards(JwtAuthGuard)
export class PropertiesResolver {
  constructor(
    @Inject(EXTENDED_PRISMA_SERVICE) private prismaService: PrismaService,
  ) {}

  @Mutation((returns) => Property)
  async createProperty(
    @User() user: JwtPayload,
    @Args('createPropertyData') args: CreatePropertyInput,
  ) {
    try {
      const data: Prisma.PropertyCreateArgs['data'] = {
        name: args.name,
        status: args.status,
        type: { connect: { id: args.typeId } },
        uniqueCode: args.uniqueCode,
        user: { connect: { id: user.userId } },
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

  @Mutation((returns) => Property)
  async updateProperty(
    @Args('id') id: string,
    @Args('updatePropertyData') args: UpdatePropertyInput,
  ) {
    try {
      const data: Prisma.PropertyUpdateArgs['data'] = {
        name: args.name,
        uniqueCode: args.uniqueCode,
      };

      if (args.typeId) {
        data.type = { connect: { id: args.typeId } };
      }

      if (args.amenityIds && args.amenityIds.length > 0) {
        data.amenities = { connect: args.amenityIds.map((id) => ({ id })) };
      }

      if (Array.isArray(args.mediaList) && args.mediaList.length > 0) {
        data.mediaList = { connect: args.mediaList.map((id) => ({ id })) };
      }

      const result = await this.prismaService.property.update({
        where: { id },
        omit: { typeId: true },
        data,
        include: { type: true, mediaList: true, amenities: true },
      });

      return result;
    } catch (e) {
      console.log('e: ', e);
      if (e instanceof Error) {
        throw new Error(`Failed to update property: ${e.message}`);
      }

      throw e;
    }
  }

  @Query((returns) => Property)
  async findProperty(@Args('id') id: string) {
    if (!id) throw new Error("'id' could not be empty");

    const property = await this.prismaService.property.findUnique({
      where: { id },
      omit: { typeId: true },
      include: {
        type: true,
        mediaList: true,
        amenities: true,
      },
    });

    return property;
  }

  @Query((returns) => [Property])
  async properties(@User() user: JwtPayload, @Args() args: FindPropertiesArgs) {
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
