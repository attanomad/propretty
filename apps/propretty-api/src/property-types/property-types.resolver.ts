import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { Auth } from 'src/auth/auth.decorator';
import { PrismaService } from 'src/prisma/prisma.service';
import { Role } from 'src/roles/role.enum';
import { CreatePropertyTypeInput } from './dto/create-property-type.args';
import { FindPropertyTypesArgs } from './dto/find-property-types.args';
import { PropertyType } from './models/property-type.model';

@Resolver()
export class PropertyTypesResolver {
  constructor(private prismaService: PrismaService) {}

  @Mutation((returns) => PropertyType)
  @Auth(Role.Admin)
  async createPropertyType(
    @Args('createPropertyTypeData') args: CreatePropertyTypeInput,
  ) {
    try {
      const result = await this.prismaService.client.propertyType.create({
        data: args,
      });

      return result;
    } catch (e) {
      console.log('e: ', e);
      if (e instanceof PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          throw new Error(`Property type '${args.name}' already exists`);
        }
      }

      throw e;
    }
  }

  @Query((returns) => [PropertyType])
  @Auth()
  propertyTypes(@Args() args: FindPropertyTypesArgs) {
    return this.prismaService.client.propertyType.findMany({
      where: {
        id: args.id,
        name: args.name
          ? { contains: args.name, mode: 'insensitive' }
          : undefined,
      },
    });
  }
}
