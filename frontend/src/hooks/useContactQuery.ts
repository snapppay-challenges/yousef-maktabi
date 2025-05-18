import { useQuery } from "@tanstack/react-query";
import { getContactByIdAPI } from "../services/contact";

const useContactQuery = (id: number) => {
  const query = useQuery({
    queryKey: ["contact", id],
    queryFn: async () => {
      const { data } = await getContactByIdAPI(id);
      return data;
    },
    enabled: !!id,
  });

  return query;
};

export default useContactQuery;
