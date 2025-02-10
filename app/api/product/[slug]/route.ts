import { products } from "@/app/constants/mock-products";
import { NextApiRequest } from "next";

export async function GET(
  req: NextApiRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  if (!slug) {
    return Response.json({
      error: "Product not found",
    });
  }

  const product = products.find((product) => `${product.slug}` === `${slug}`);
  return Response.json({ product });
}
