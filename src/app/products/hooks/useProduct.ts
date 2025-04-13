import { useQuery } from "@tanstack/react-query";
import { fetchProduct } from "../services/products";
import { Product } from "../types";

export const useProduct = (id: string) => {
  return useQuery<Product>({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
    enabled: !!id,
  });
};
