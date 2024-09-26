import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { Auth } from 'src/auth/auth.decorator';
import { JwtPayload } from 'src/auth/jwt.payload';
import { PrismaService } from 'src/prisma/prisma.service';
import { Role } from 'src/roles/role.enum';
import { User } from 'src/user/user.decorator';
import { CreatePropertyInput } from './dto/create-property.args';
import { FindPropertiesArgs } from './dto/find-properties.args';
import { UpdatePropertyInput } from './dto/update-property.args';
import { Property } from './models/property.model';

@Resolver()
export class PropertiesResolver {
  constructor(private prismaService: PrismaService) {}

  @Mutation((returns) => Property)
  @Auth(Role.Admin, Role.Agent)
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
        author: { connect: { id: user.userId } },
      };
      const amenities =
        args.amenityIds?.map<Prisma.PropertyAmenityWhereUniqueInput>((id) => ({
          id,
        }));
      const mediaList = args.mediaList?.map((id) => ({ id }));

      if (amenities && amenities.length > 0) {
        data.amenities = { connect: amenities };
      }

      if (mediaList && mediaList.length > 0) {
        data.mediaList = { connect: mediaList };
      }

      if (args.priceList && args.priceList.length > 0) {
        console.log('priceList: ', args.priceList);
        data.priceList = {
          createMany: { data: args.priceList, skipDuplicates: true },
        };
      }

      const result = await this.prismaService.client.property.create({
        omit: { typeId: true },
        data,
        include: {
          type: true,
          mediaList: true,
          amenities: true,
          priceList: true,
        },
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
  @Auth(Role.Admin, Role.Agent)
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

      if (args.priceList && args.priceList.length > 0) {
        console.log('priceList: ', args.priceList);
        data.priceList = {
          createMany: { data: args.priceList, skipDuplicates: true },
        };
      }

      const result = await this.prismaService.client.property.update({
        where: { id },
        omit: { typeId: true },
        data,
        include: {
          type: true,
          mediaList: true,
          amenities: true,
          priceList: true,
        },
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
  @Auth()
  async findProperty(@Args('id') id: string) {
    if (!id) throw new Error("'id' could not be empty");

    const property = await this.prismaService.client.property.findUnique({
      where: { id },
      omit: {
        typeId: true,
        authorId: true,
        propertyOwnerId: true,
        locationId: true,
      },
      include: {
        type: true,
        mediaList: true,
        amenities: true,
        author: true,
        location: true,
        priceList: true,
        PropertyListing: true,
        PropertyOwner: true,
      },
    });

    return property;
  }

  @Query((returns) => [Property])
  @Auth()
  async properties(@User() user: JwtPayload, @Args() args: FindPropertiesArgs) {
    const prismaArgs: Prisma.PropertyFindManyArgs = {
      omit: {
        typeId: true,
        authorId: true,
        propertyOwnerId: true,
        locationId: true,
      },
      include: {
        type: true,
        mediaList: true,
        amenities: true,
        author: true,
        location: true,
        priceList: true,
        PropertyListing: true,
        PropertyOwner: true,
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

    const result =
      await this.prismaService.client.property.findMany(prismaArgs);

    return result;
  }
}
