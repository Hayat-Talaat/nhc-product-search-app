import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../services/products";
import { ProductsResponse } from "@/app/products/types";

export const useProducts = (searchTerm: string) => {
  return useQuery<ProductsResponse>({
    queryKey: ["products", searchTerm],
    queryFn: () => fetchProducts(searchTerm),
    enabled: searchTerm.length > 0,
  });
};
