import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { User } from 'src/users/models/user.model';
import { UsersService } from '../users/users.service';
import { JwtPayload } from './jwt.payload';
import { Token } from './models/token.model';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    username: string,
    pass: string,
  ): Promise<Omit<User, 'hashedPassword'>> {
    const user = (await this.usersService.findOneByUsername(
      username,
      true,
    )) as User;

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

  async login(user: Omit<User, 'hashedPassword'>): Promise<Token> {
    const payload: JwtPayload = {
      userId: user.id,
      userRoles: user.roles,
      username: user.username,
    };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  async signUp(username: string, pass: string) {
    return this.usersService.create(username, pass);
  }
}
