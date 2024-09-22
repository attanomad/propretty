import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePropertyTypeInput } from './dto/create-property-type.args';
import { FindPropertyTypesArgs } from './dto/find-property-types.args';
import { PropertyType } from './models/property-type.model';

@Resolver()
@UseGuards(JwtAuthGuard)
export class PropertyTypesResolver {
  constructor(private prismaService: PrismaService) {}

  @Mutation((returns) => PropertyType)
  async createPropertyType(
    @Args('createPropertyTypeData') args: CreatePropertyTypeInput,
  ) {
    try {
      const result = await this.prismaService.propertyType.create({
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
  propertyTypes(@Args() args: FindPropertyTypesArgs) {
    return this.prismaService.propertyType.findMany({
      where: { id: args.id, name: args.name },
    });
  }
}
