"use client";
import React, { useState } from "react";
import { Product } from "@/app/products/types";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="w-full max-w-xs border rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow ">
      <div className="relative h-40 w-full bg-gray-100">
        {isLoading && <Skeleton className="absolute inset-0 w-full h-full" />}
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          sizes="(min-width: 1024px) 250px, (min-width: 768px) 200px, 100vw"
          className={`object-cover transition-opacity duration-300 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={() => setIsLoading(false)}
        />
      </div>
      <div className="p-4 space-y-2">
        <h3 className="text-primary font-bold text-base line-clamp-1">
          {product.title}
        </h3>
        <p className="text-sm text-gray-600 leading-snug line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between pt-4">
          <span className="text-sm font-semibold">
            Price : <span className="text-primary">{product.price}$</span>
          </span>
          <Link href={`/products/${product.id}`}>
            <Button className="bg-primary text-white  px-4 py-1 rounded cursor-pointer">
              More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
