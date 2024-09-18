import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class UnifiedResponseInterceptor<T = unknown>
  implements NestInterceptor<T>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler<T>,
  ): Observable<BaseResponseBody<T>> {
    return next.handle().pipe(
      map((data: any) => {
        // If `data` contains `code` or `message`, treat it as a full response object
        if (data?.code !== undefined || data?.message !== undefined) {
          return {
            code: data?.code ?? 0,
            message: data?.message ?? 'success',
            data: data?.data, // If `data.data` exists, include it
            request_id: 'change-me',
          };
        }

        // Otherwise, treat `data` as the actual response data
        return {
          code: 0, // Default code
          message: 'success', // Default message
          data, // Use `data` as the actual data field
          request_id: 'change-me',
        };
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
