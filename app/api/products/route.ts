import { products } from "@/app/constants/mock-products";
import { toLower } from "lodash";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url || "");
  const query = url.searchParams;
  const productKey = query.get("product_key");

  if (productKey) {
    const filteredProducts = products.filter((product) =>
      toLower(product.product_key).includes(toLower(productKey))
    );
    return Response.json({ products: filteredProducts });
  }

  return Response.json({ products });
}
