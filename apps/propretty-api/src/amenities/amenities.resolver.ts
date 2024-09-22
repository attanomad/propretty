import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { Auth } from 'src/auth/auth.decorator';
import { PrismaService } from 'src/prisma/prisma.service';
import { Role } from 'src/roles/role.enum';
import { CreateAmenityInput } from './dto/create-amenity.args';
import { FindAmenitiesArgs } from './dto/find-amenities.args';
import { Amenity } from './models/amenity.model';

@Resolver()
export class AmenitiesResolver {
  constructor(private prismaService: PrismaService) {}

  @Mutation((returns) => Amenity)
  @Auth(Role.Admin)
  async createAmenity(@Args('createAmenityData') args: CreateAmenityInput) {
    try {
      const result = await this.prismaService.client.propertyAmenitiy.create({
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
  @Auth()
  amenities(@Args() args: FindAmenitiesArgs) {
    return this.prismaService.client.propertyAmenitiy.findMany({
      where: {
        id: args.id,
        name: args.name
          ? { contains: args.name, mode: 'insensitive' }
          : undefined,
      },
    });
  }
}
