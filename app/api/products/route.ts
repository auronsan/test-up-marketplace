import { products } from "@/app/constants/mock-products";
import { NextApiRequest } from "next";
import { toLower } from "lodash";

export async function GET(req: NextApiRequest) {
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
