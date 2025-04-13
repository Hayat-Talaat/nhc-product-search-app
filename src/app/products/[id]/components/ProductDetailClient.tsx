"use client";
import { useProduct } from "../../hooks/useProduct";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";
import { renderStars } from "@/components/ui/ratings";
import { Loader } from "@/components/ui/loader";
import { useParams } from "next/navigation";

export default function ProductDetailClient() {
  const { id } = useParams<{ id: string }>();

  const { data: product, isLoading } = useProduct(id);
  const [imageLoading, setImageLoading] = useState(true);

  if (isLoading) return <Loader />;
  if (!product) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">{product.title}</h1>
      <div className="flex flex-col items-center">
        <div className="relative w-full max-w-lg h-64 bg-gray-100 rounded-lg overflow-hidden">
          {imageLoading && (
            <Skeleton className="absolute inset-0 w-full h-full" />
          )}
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            priority
            sizes="(min-width: 1024px) 250px, (min-width: 768px) 200px, 100vw"
            className={`object-fill transition-opacity duration-300 ${
              imageLoading ? "opacity-0" : "opacity-100"
            }`}
            onLoad={() => setImageLoading(false)}
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4 w-full max-w-lg">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <strong>Price : </strong>
              <span className="text-primary">{product.price}%</span>
            </div>
            <div className="flex items-center gap-2 mb-1">
              <strong>Rating : </strong>
              <span className="text-primary">{product.rating}</span>
              {renderStars(product.rating)}
            </div>
            <div className="flex items-center gap-2 mb-1">
              <strong>Brand : </strong>
              <span className="text-primary">{product.brand}</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <strong>Discount Percentage : </strong>
              <span className="text-primary">
                {product.discountPercentage}%
              </span>
            </div>
            <div className="flex items-center gap-2 mb-1">
              <strong>Stock : </strong>
              <span className="text-primary">{product.stock}</span>
            </div>
            <div className="flex items-center gap-2 mb-1">
              <strong>Category : </strong>
              <span className="text-primary">{product.category}</span>
            </div>
          </div>
        </div>

        <div>
          <div>
            <h2 className="text-lg font-semibold mt-6">Description</h2>
            <p className="text-gray-700 mt-2">{product.description}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mt-6">Product Images</h2>
            <div className="grid grid-cols-4 gap-4 mt-2">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className="relative w-full h-32 bg-gray-100 rounded-lg overflow-hidden"
                >
                  {imageLoading && (
                    <Skeleton className="absolute inset-0 w-full h-full" />
                  )}
                  <Image
                    src={image}
                    alt={`Product Image ${index + 1}`}
                    fill
                    priority
                    sizes="(min-width: 1024px) 250px, (min-width: 768px) 200px, 100vw"
                    className={`object-fill transition-opacity duration-300 ${
                      imageLoading ? "opacity-0" : "opacity-100"
                    }`}
                    onLoad={() => setImageLoading(false)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
