import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PropertiesService {
  constructor(private prismaService: PrismaService) {}

  create(args: Prisma.PropertyCreateArgs) {
    return this.prismaService.property.create(args);
  }

  // findAll() {
  //   return `This action returns all properties`;
  // }

  findOne(args: Prisma.PropertyFindUniqueArgs) {
    return this.prismaService.property.findUnique(args);
  }

  update(args: Prisma.PropertyUpdateArgs) {
    return this.prismaService.property.update(args);
  }

  remove(args: Prisma.PropertyDeleteArgs) {
    return this.prismaService.property.delete(args);
  }
}
