import axiosInstance from "@/lib/axios";

export const fetchProducts = async (keyword: string) => {
  const res = await axiosInstance.get("/products/search", {
    params: { q: keyword },
  });
  return res.data;
};

export const fetchProduct = async (id: string) => {
  const res = await axiosInstance.get(`/products/${id}`);
  return res.data;
};
