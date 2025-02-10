"use client";
import { Product } from "@/app/types/products";
import Image from "next/image";
import Link from "next/link";

export function ProductCard({ product }: { product: Product }) {
  return (
    <>
      <Link
        key={product.id}
        className="max-w-[300px] min-h-[100px] min-w-[300px] relative rounded-lg overflow-hidden hover:opacity-75 xl:w-auto"
        href={`/product/${product.slug}`}
      >
        <div className="w-full h-full object-center object-cover">
          <Image
            src={product.image || "/empty.jpg"}
            className="w-full h-full object-cover"
            width={300}
            height={300}
            alt={product.product_key}
          />
        </div>
        <span
          aria-hidden="true"
          className="absolute w-full bottom-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
        />

        <div className="absolute w-full bottom-2 mt-auto text-center text-xl font-bold text-white px-2">
          {product.product_key}
        </div>
      </Link>
    </>
  );
}
