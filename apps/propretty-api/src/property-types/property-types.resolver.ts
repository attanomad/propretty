import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { CreateOnePropertyTypeArgs } from 'src/@generated/property-type/create-one-property-type.args';
import { FindManyPropertyTypeArgs } from 'src/@generated/property-type/find-many-property-type.args';
import { PropertyType } from 'src/@generated/property-type/property-type.model';
import { Auth } from 'src/auth/auth.decorator';
import { PrismaService } from 'src/prisma/prisma.service';
import { Role } from 'src/roles/role.enum';

@Resolver()
export class PropertyTypesResolver {
  constructor(private prismaService: PrismaService) {}

  @Mutation((returns) => PropertyType)
  @Auth(Role.Admin)
  async createPropertyType(@Args() args: CreateOnePropertyTypeArgs) {
    try {
      const result = await this.prismaService.client.propertyType.create(args);

      return result;
    } catch (e) {
      console.log('e: ', e);
      if (e instanceof PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          throw new Error(`Property type '${args.data.name}' already exists`);
        }
      }

      throw e;
    }
  }

  @Query((returns) => [PropertyType])
  @Auth()
  findPropertyTypes(@Args() args: FindManyPropertyTypeArgs) {
    return this.prismaService.client.propertyType.findMany(args);
  }
}
