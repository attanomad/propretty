import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAmenityInput } from './dto/create-amenity.args';
import { FindAmenitiesArgs } from './dto/find-amenities.args';
import { Amenity } from './models/amenity.model';

@Resolver()
export class AmenitiesResolver {
  constructor(private prismaService: PrismaService) {}

  @Mutation((returns) => Amenity)
  async createAmenity(@Args('createAmenityData') args: CreateAmenityInput) {
    try {
      const result = await this.prismaService.propertyAmenitiy.create({
        data: args,
      });

      return result;
    } catch (e) {
      console.log('e: ', e);
      if (e instanceof PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          throw new Error(`Amenity '${args.name}' already exists`);
        }
      }

      throw e;
    }
  }

  @Query((returns) => [Amenity])
  amenities(@Args() args: FindAmenitiesArgs) {
    return this.prismaService.propertyAmenitiy.findMany({
      where: { id: args.id, name: args.name },
    });
  }
}
