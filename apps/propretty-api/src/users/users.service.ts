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
    return this.prismaService.client.user.findUnique({
      omit: !withHashedPassword ? { hashedPassword: true } : undefined,
      where: { username },
      include: { roles: true },
    });
  }

  async create(username: string, password: string, roles?: string[]) {
    const hashedPassword = await hash(
      password,
      this.configService.get<number>('security.password.saltRounds'),
    );

    return this.prismaService.client.user.create({
      data: {
        hashedPassword,
        username,
        roles:
          Array.isArray(roles) && roles.length > 0
            ? { connect: roles.map((name) => ({ name })) }
            : undefined,
      },
      select: { id: true, username: true },
    });
  }
}
