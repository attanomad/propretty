import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  StreamableFile,
} from '@nestjs/common';
import { GqlContextType } from '@nestjs/graphql';
import { map, Observable } from 'rxjs';

@Injectable()
export class UnifiedResponseInterceptor<T = unknown>
  implements NestInterceptor<T>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler<T>,
  ): Observable<BaseResponseBody<T> | any> {
    if (context.getType<GqlContextType>() === 'graphql') {
      return next.handle(); // Bypass for GraphQL requests
    }

    return next.handle().pipe(
      map((data: any) => {
        if (data instanceof StreamableFile) {
          return data;
        }

        let body: BaseResponseBody<T>;

        // If `data` contains `code` or `message`, treat it as a full response object
        if (data?.code !== undefined || data?.message !== undefined) {
          body = {
            code: data?.code ?? 0,
            message: data?.message ?? 'success',
            data: data?.data, // If `data.data` exists, include it
            request_id: 'change-me',
          };
        }

        // Otherwise, treat `data` as the actual response data
        body = {
          code: 0, // Default code
          message: 'success', // Default message
          data, // Use `data` as the actual data field
          request_id: 'change-me',
        };

        return body;
      }),
    );
  }
}

export interface BaseResponseBody<T = unknown> {
  code: number;
  message: string;
  data?: T;
  request_id: string;
}
