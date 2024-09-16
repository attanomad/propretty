import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { compare } from 'bcrypt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(
      { username },
      { id: true, username: true, hashedPassword: true },
    );

    if (!user)
      throw new HttpException(
        { code: 101, message: 'User not found' },
        HttpStatus.OK,
      );

    const match = await compare(pass, user.hashedPassword);

    if (match) {
      const { hashedPassword, ...result } = user;

      return result;
    }

    return null;
  }

  async login(user: User) {
    const payload = { username: user.username, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async signUp(username: string, pass: string) {
    return this.usersService.create(username, pass);
  }
}
