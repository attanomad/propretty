import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlContextType, GqlExecutionContext } from '@nestjs/graphql';
import { Request } from 'express';

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    let request: Request;

    if (ctx.getType<GqlContextType>() === 'graphql') {
      request = GqlExecutionContext.create(ctx).getContext<{ req: Request }>()
        .req;
    } else {
      request = ctx.switchToHttp().getRequest<Request>();
    }

    return request.user;
  },
);
