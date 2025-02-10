import { ProductCard } from "./components/products/ProductCard";
import { Product } from "./types/products";
import { axiosClient as axios } from "./utils/use-axios";

interface HomePageData {
  products: Product[];
}

export default async function Home() {
  const { data } = await axios.get<HomePageData>("/products");
  const { products } = data;

  return (
    <>
      <div className="h-500 w-full relative  hidden md:block">
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24 z-1">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2">
            New Arrivals
          </h1>
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
            Best Deal Winter 20%
          </button>
        </div>
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z--1"
        >
          <source src="/4962796-uhd_3840_2160_25fps.mp4" type="video/mp4" />
        </video>
      </div>
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
