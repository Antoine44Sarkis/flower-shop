"use client";
import React, { useEffect, useState } from "react";

const Sale = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("api/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products", error);
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
          products.map(({ _id, name, description, imageUrl }) => (
            <div
              key={_id}
              className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden"
              style={{ height: "350px" }}
            >
              <div className="flex-shrink-0 h-48 relative">
                <img
                  src={imageUrl}
                  alt={name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h2 className="font-bold text-lg mb-1 break-words line-clamp-2">
                  {name}
                </h2>
                <p className="text-gray-600 flex-grow break-words line-clamp-3">
                  {description}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Sale;
