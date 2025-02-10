"use client";
import Image from "next/image";
import { useState } from "react";

interface Product {
  product_key: string;
  images: string[];
}

interface ImageGalleryProps {
  product: Product;
}

export default function ImageGallery(props: ImageGalleryProps) {
  const { product } = props;
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="w-full max-w-2xl mx-auto sm:block lg:max-w-none relative">
      <span className="rounded-md overflow-hidden">
        <div className="w-full h-full object-center object-cover rounded-lg">
          <Image
            src={product.images[activeIndex] + "?w=800"}
            alt={product.product_key}
            className="w-full h-full object-center object-cover rounded-lg min-h-[800px] max-h-[800px]"
            width={500}
            height={800}
          />
        </div>
      </span>
      {/* List on top of image */}
      <div className="w-full p-4 flex space-x-2">
        {product.images.map((image: string, index: number) => (
          <div key={index} className="relative">
            <Image
              src={image + "?w=100"}
              alt={product.product_key}
              className={`w-20 h-20 object-cover rounded-lg ${
                index === activeIndex ? "border-4 border-primary-500" : ""
              }`}
              width={100}
              height={100}
              onClick={() => setActiveIndex(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
