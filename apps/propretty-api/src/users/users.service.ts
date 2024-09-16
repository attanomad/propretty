import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Prisma } from '@prisma/client';
import { hash } from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(
    private configService: ConfigService,
    private prismaService: PrismaService,
  ) {}

  findOne(where: Prisma.UserWhereUniqueInput, select?: Prisma.UserSelect) {
    return this.prismaService.user.findUnique({
      where,
      select: select ? select : { id: true, username: true },
    });
  }

  async create(username: string, password: string) {
    const hashedPassword = await hash(
      password,
      this.configService.get<number>('security.password.saltRounds'),
    );

    return this.prismaService.user.create({
      data: { hashedPassword, username },
      select: { id: true, username: true },
    });
  }
}
