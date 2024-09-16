import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { hash } from 'bcrypt';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  constructor(private configService: ConfigService) {}

  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  async create(username: string, password: string): Promise<User> {
    const hashedPassword = await hash(
      password,
      this.configService.get<number>('security.password.saltRounds'),
    );
    const user = {
      userId: this.users.length + 1,
      username,
      password: hashedPassword,
    };

    this.users.push(user);

    const { password: pw, ...rest } = user;

    return rest;
  }
}
