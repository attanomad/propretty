export interface BaseResponseBody<T = unknown> {
  code: number;
  message: string;
  data?: T;
  request_id: string;
}
