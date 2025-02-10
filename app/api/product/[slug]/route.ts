import { products } from "@/app/constants/mock-products";
import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
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
