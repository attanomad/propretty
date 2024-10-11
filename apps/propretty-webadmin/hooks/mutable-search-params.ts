import {
  ReadonlyURLSearchParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

export const useMutableSearchParams = (): [
  ReadonlyURLSearchParams,
  /**
   * Set value to `null` to remove it from the search params
   */
  (obj: Record<string, string | null>) => void,
] => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const update = (obj: Record<string, string | null>) => {
    const sp = new URLSearchParams(Array.from(searchParams));

    Object.entries(obj).forEach(([key, value]) => {
      if (value === null) {
        sp.delete(key);
      } else {
        sp.set(key, value);
      }
    });

    const query = sp.toString();

    if (!query) return;

    router.replace(`${pathname}?${query}`);
  };

  return [searchParams, update];
};
