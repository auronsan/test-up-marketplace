import { ProductCard } from "@/app/components/products/ProductCard";
import { Product } from "@/app/types/products";
import { axiosClient } from "@/app/utils/use-axios";

interface SearchPageProps {
  params: Promise<{
    query: string;
  }>;
}

interface SearchPageData {
  products: Product[];
}

export default async function SearchPage({ params }: SearchPageProps) {
  const { query } = await params;
  const { data } = await axiosClient.get<SearchPageData>(
    `/products?product_key=${query}`
  );
  const { products } = data;
  return (
    <>
      <section
        aria-labelledby="category-heading"
        className="pt-6 sm:pt-12 xl:max-w-7xl xl:mx-auto xl:px-8"
      >
        <div className="mt-4 flow-root">
          <div className="-my-2">
            <div className="box-content py-2 px-2 relative overflow-x-auto xl:overflow-visible">
              <div className="grid justify-items-center grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:gap-x-8">
                {products &&
                  products.map((product) => {
                    return <ProductCard key={product.id} product={product} />;
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
