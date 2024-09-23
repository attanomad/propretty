import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlContextType, GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { LoginInput, MutationParamKey } from './dto/login.args';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  getRequest(context: ExecutionContext) {
    if (context.getType<GqlContextType>() === 'graphql') {
      const ctx = GqlExecutionContext.create(context);
      const req = ctx.getContext<{
        req: Request;
      }>().req;
      const args = ctx.getArgs<{ [MutationParamKey]: LoginInput }>();

      // passport-local's looks for username and password field
      // in the request body
      //
      // See: https://github.com/jaredhanson/passport-local/?tab=readme-ov-file#available-options
      req.body.username = args[MutationParamKey].username;
      req.body.password = args[MutationParamKey].password;

      return req;
    }

    return context.switchToHttp().getRequest();
  }
}
