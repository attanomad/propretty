import { Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from 'src/prisma/prisma.service';
import { Property } from './models/property.model';

@Resolver()
export class PropertiesResolver {
  constructor(private prismaService: PrismaService) {}

  @Query((returns) => [Property])
  properties() {
    return this.prismaService.property.findMany({
      //   select: { id: true },
      omit: { typeId: true },
      include: { type: true },
    });
  }
}
