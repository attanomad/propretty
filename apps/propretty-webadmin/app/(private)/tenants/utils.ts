export const searchParamsToPagination = <T = any>(
  searchParams: URLSearchParams,
  resolveWhere?: (q: string) => T
) => {
  const skip = searchParams.get("skip")
    ? parseInt(searchParams.get("skip")!)
    : 0;
  const take = searchParams.get("take")
    ? parseInt(searchParams.get("take")!)
    : 10;
  const current = skip > 0 ? skip / take + 1 : 1;
  const where: T | undefined =
    searchParams.get("q") && typeof resolveWhere === "function"
      ? resolveWhere(searchParams.get("q")!)
      : undefined;

  return { current, skip, take, where };
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
