"use client";
import React from "react";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "./ProductCard";
import { Loader } from "@/components/ui/loader";
import { NoResults } from "@/components/no-results";

interface ProductListProps {
  searchTerm: string;
}

function ProductList({ searchTerm }: ProductListProps) {
  const { data, isLoading } = useProducts(searchTerm);
  const products = data?.products || [];

  if (isLoading) return <Loader />;

  return (
    <div className="w-full flex flex-col items-center justify-center my-5 px-4">
      {products && searchTerm && (
        <p className="text-gray-600 mb-4 max-w-xl">
          Total results count: {products.length}
        </p>
      )}

      {searchTerm && !products.length ? (
        <NoResults
          title="No results for your search!"
          description="Try another keyword"
        />
      ) : products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default ProductList;
