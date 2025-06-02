"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Product {
  _id: string;
  name: string;
  description: string;
  imageUrl: string;
}

const Sale = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products"); // Added leading slash
        const data = await res.json();

        // Handle non-array responses
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error("API response is not an array:", data);
          setProducts([]);
        }
      } catch (error) {
        console.error("Failed to fetch products", error);
        setProducts([]);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="p-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {products.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">
            No products listed yet.
          </p>
        ) : (
          products.map((product) => {
            // Handle missing IDs
            const id = product._id?.toString() || Math.random().toString();
            return (
              <div
                key={id}
                className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden"
                style={{ height: "350px" }}
              >
                <div className="flex-shrink-0 h-48 relative">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h2 className="font-bold text-lg mb-1 break-words line-clamp-2">
                    {product.name}
                  </h2>
                  <p className="text-gray-600 flex-grow break-words line-clamp-3">
                    {product.description}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Sale;
