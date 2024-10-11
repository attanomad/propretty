export const searchParamsToPagination = (searchParams: URLSearchParams) => {
  const skip = searchParams.get("skip")
    ? parseInt(searchParams.get("skip")!)
    : 0;
  const take = searchParams.get("take")
    ? parseInt(searchParams.get("take")!)
    : 10;
  const current = skip > 0 ? skip / take + 1 : 1;

  return { current, skip, take };
};

export function toURLSearchParams(
  obj: Record<string, string | string[]>
): URLSearchParams {
  const params = new URLSearchParams();

  Object.entries(obj).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((v) => params.append(key, v));
    } else {
      params.append(key, value);
    }
  });

  return params;
}
