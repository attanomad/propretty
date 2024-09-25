interface BaseServerActionBaseResponse {
  message: string;
}

interface ServerActionSuccessfullBaseResponse<T = unknown>
  extends BaseServerActionBaseResponse {
  code: 0;
  data: T;
}

interface ServerActionFailedBaseResponse<T = unknown>
  extends BaseServerActionBaseResponse {
  code: number;
  data?: T;
}

export type ServerActionBaseResponse<T = unknown> =
  | ServerActionSuccessfullBaseResponse<T>
  | ServerActionFailedBaseResponse<T>;
