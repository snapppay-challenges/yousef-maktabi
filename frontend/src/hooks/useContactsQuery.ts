import { useInfiniteQuery } from "@tanstack/react-query";
import { getContactListAPI } from "../services/contact";
import { PaginatedResponse } from "../types";
import { Contact } from "../types/contact";

const PAGE_LIMIT = 24;

const generateFilterParams = (searchQuery: string) => {
  let filter: Record<string, any> | null = null;

  if (searchQuery.trim()) {
    if (/^\d+$/.test(searchQuery)) {
      filter = { phone: { contains: searchQuery } };
    } else {
      filter = { first_name: { contains: searchQuery } };
    }
  }

  return filter;
};

export const useContactsQuery = (searchQuery: string = "") => {
  const query = useInfiniteQuery<PaginatedResponse<Contact>, Error>({
    queryKey: ["contacts", searchQuery],
    queryFn: async ({ pageParam = 0 }) => {
      const params = {
        limit: PAGE_LIMIT,
        skip: pageParam,
        where: generateFilterParams(searchQuery),
      };

      const { data } = await getContactListAPI({ params });
      return data;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage: PaginatedResponse<Contact>) => {
      const { skipped, limit, total } = lastPage.meta;
      if (skipped + limit >= total) {
        return undefined; // No more pages
      }
      return skipped + limit;
    },
  });

  return query;
};
