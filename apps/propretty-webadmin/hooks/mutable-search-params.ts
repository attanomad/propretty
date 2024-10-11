import {
  ReadonlyURLSearchParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

export const useMutableSearchParams = (): [
  ReadonlyURLSearchParams,
  (obj: Record<string, string>) => void,
] => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const update = (obj: Record<string, string>) => {
    const sp = new URLSearchParams(Array.from(searchParams));

    Object.entries(obj).forEach(([key, value]) => sp.set(key, value));

    const query = sp.toString();

    if (!query) return;

    router.replace(`${pathname}?${query}`);
  };

  return [searchParams, update];
};
