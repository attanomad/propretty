import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { CreateOnePropertyArgs } from 'src/@generated/property/create-one-property.args';
import { FindManyPropertyArgs } from 'src/@generated/property/find-many-property.args';
import { FindUniquePropertyArgs } from 'src/@generated/property/find-unique-property.args';
import { PropertyUpdateInput } from 'src/@generated/property/property-update.input';
import { Auth } from 'src/auth/auth.decorator';
import { JwtPayload } from 'src/auth/jwt.payload';
import { PrismaService } from 'src/prisma/prisma.service';
import { Role } from 'src/roles/role.enum';
import { User } from 'src/user/user.decorator';
import { Property } from './models/property.model';

@Resolver()
export class PropertiesResolver {
  constructor(private prismaService: PrismaService) {}

  @Mutation((returns) => Property)
  @Auth(Role.Admin, Role.Agent)
  async createProperty(
    @User() user: JwtPayload,
    @Args() args: CreateOnePropertyArgs,
  ) {
    try {
      const result = await this.prismaService.client.property.create(args);

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
    @Args('data') data: PropertyUpdateInput,
  ) {
    try {
      const result = await this.prismaService.client.property.update({
        where: { id },
        data,
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

  @Query((returns) => Property, { nullable: true })
  @Auth()
  async findUniqueProperty(@Args() args: FindUniquePropertyArgs) {
    return this.prismaService.client.property.findUnique(args);
  }

  @Query((returns) => [Property], { nullable: 'items' })
  @Auth()
  async findProperties(
    @User() user: JwtPayload,
    @Args() args: FindManyPropertyArgs,
  ) {
    return this.prismaService.client.property.findMany(args);
  }
}
