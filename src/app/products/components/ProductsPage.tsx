"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import ProductList from "./ProductList";
import { useState } from "react";

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(80vh-80px)] px-4">
      <div className="w-full max-w-xl my-5">
        <label className="block text-primary font-medium mb-2 text-sm">
          Search products by keyword
        </label>
        <div className="relative">
          <Input
            type="text"
            placeholder="Search keyword"
            className="pl-4 pr-10 bg-gray-100 border border-primary text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search
            size={16}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
          />
        </div>
      </div>
      <ProductList searchTerm={searchTerm} />
    </div>
  );
}
