import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { hash } from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(
    private configService: ConfigService,
    private prismaService: PrismaService,
  ) {}

  findOneByUsername(username: string, withHashedPassword: boolean = false) {
    return this.prismaService.user.findUnique({
      where: { username },
      include: { roles: true },
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
