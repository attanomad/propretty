import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PropertiesService {
  constructor(private prismaService: PrismaService) {}

  create(args: Prisma.PropertyCreateArgs) {
    return this.prismaService.client.property.create(args);
  }

  find(args?: Prisma.PropertyFindManyArgs) {
    return this.prismaService.client.property.findMany(args);
  }

  findOne(args: Prisma.PropertyFindUniqueArgs) {
    return this.prismaService.client.property.findUnique(args);
  }

  update(args: Prisma.PropertyUpdateArgs) {
    return this.prismaService.client.property.update(args);
  }

  remove(args: Prisma.PropertyDeleteArgs) {
    return this.prismaService.client.property.delete(args);
  }
}
