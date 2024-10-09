import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { FindManyPropertyAmenityArgs } from 'src/@generated/property-amenity/find-many-property-amenity.args';
import { PropertyAmenityCreateInput } from 'src/@generated/property-amenity/property-amenity-create.input';
import { PropertyAmenityUpdateInput as PropertyAmenityUpdateInputGql } from 'src/@generated/property-amenity/property-amenity-update.input';
import { Auth } from 'src/auth/auth.decorator';
import { PrismaService } from 'src/prisma/prisma.service';
import { Role } from 'src/roles/role.enum';
import { Amenity } from './models/amenity.model';

@Resolver()
export class AmenitiesResolver {
  constructor(private prismaService: PrismaService) {}

  @Mutation((returns) => Amenity)
  @Auth(Role.Admin, Role.Root)
  async createAmenity(
    @Args('createAmenityData') data: PropertyAmenityCreateInput,
  ) {
    try {
      const result = await this.prismaService.client.propertyAmenity.create({
        data,
      });

      return result;
    } catch (e) {
      console.log('e: ', e);
      if (e instanceof PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          throw new Error(`Amenity '${data.name}' already exists`);
        }
      }

      throw e;
    }
  }

  @Mutation((returns) => Amenity)
  @Auth(Role.Admin, Role.Root)
  async updateAmenity(
    @Args('id') id: string,
    @Args('data') data: PropertyAmenityUpdateInputGql,
  ) {
    try {
      const result = await this.prismaService.client.propertyAmenity.update({
        where: { id },
        /**
         * @note Cast the type to solve the excessive stack depth runtime TypeScript error
         */
        data: data as Prisma.PropertyAmenityUpdateInput,
      });

      return result;
    } catch (e) {
      console.log('e: ', e);
      if (e instanceof PrismaClientKnownRequestError) {
        switch (e.code) {
          case 'P2002':
            throw new Error(`Amenity '${data.name}' already exists`);

          case 'P2025':
            throw new Error(`The amenity does not exists`);

          default:
            break;
        }
      }

      throw e;
    }
  }

  @Query((returns) => [Amenity])
  @Auth()
  amenities(@Args() args: FindManyPropertyAmenityArgs) {
    return this.prismaService.client.propertyAmenity.findMany(args);
  }
}
