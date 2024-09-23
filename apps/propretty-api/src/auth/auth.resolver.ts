import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { User } from 'src/user/user.decorator';
import { User as UserModel } from 'src/users/models/user.model';
import { AuthService } from './auth.service';
import { LoginInput, MutationParamKey } from './dto/login.args';
import { LocalAuthGuard } from './local-auth.guard';
import { Token } from './models/token.model';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Mutation((returns) => Token)
  async login(
    // Set this @Args for the LocalAuthGuard
    @Args(MutationParamKey) credentials: LoginInput,
    @User() user: Omit<UserModel, 'hashedPassword'>,
  ) {
    return this.authService.login(user);
  }
}
