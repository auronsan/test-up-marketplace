import ImageGallery from "@/app/components/products/ImageGallery";
import { Price } from "@/app/components/products/Price";
import { Product } from "@/app/types/products";
import { axiosClient } from "@/app/utils/use-axios";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

interface ProductPageData {
  product: Product;
}

export default async function ProductPage(props: ProductPageProps) {
  const { slug } = await props.params;

  const { data } = await axiosClient.get<ProductPageData>(`/product/${slug}`);
  const { product } = data;

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-gray-900 my-8">
          {product.product_key}
        </h2>
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start mt-4 md:mt-12">
          {/* Image gallery */}
          <ImageGallery product={product} />

          {/* Product info */}
          <div className="mt-10 px-4 flex flex-col sm:px-0 sm:mt-16 lg:mt-0">
            <div className="">
              <h3 className="sr-only">{"product.description"}</h3>

              <div
                className="text-base text-gray-700"
                dangerouslySetInnerHTML={{
                  __html: product.description,
                }}
              />
            </div>
            <form>
              <div className="flex flex-col mt-5">
                <p className="text-3xl text-gray-900 mr-4">
                  <Price
                    priceWithTax={product.price}
                    currencyCode={"USD"}
                  ></Price>
                </p>
                <div className="flex flex-col  mt-5">
                  <span className="text-lg font-medium text-gray-700 mb-2">
                    Variants:
                  </span>

                  <div className="flex flex-wrap">
                    {product.colors.map((color, index) => (
                      <div key={index} className="flex items-center mb-2 mr-4">
                        <input
                          type="radio"
                          id={`color-${index}`}
                          name="color"
                          value={color}
                          defaultChecked={index === 0}
                          className="w-6 h-6"
                          style={{
                            accentColor: color,
                          }}
                        />
                        <label
                          htmlFor={`color-${index}`}
                          className="ml-2 text-lg font-medium text-gray-700 capitalize tracking-wide font-semibold"
                        >
                          {color}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex sm:flex-col1 align-baseline mt-2">
                  <button
                    type="submit"
                    className={`max-w-xs flex-1 ${"bg-primary-600 hover:bg-primary-700"}
                                         transition-colors border border-transparent rounded-md py-3 px-8 flex items-center
                                          justify-center text-base font-medium text-white focus:outline-none
                                          focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-primary-500 sm:w-full`}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
              <section className="mt-5 pt-5 border-t text-xs">
                <h3 className="text-gray-600 font-bold mb-2">
                  {"Shipping & Returns"}
                </h3>
                <div className="text-gray-500 space-y-1">
                  <p>
                    Standard shipping: 3 - 5 working days. Express shipping: 1 -
                    3 working days.
                  </p>
                  <p>
                    Shipping costs depend on delivery address and will be
                    calculated during checkout.
                  </p>
                  <p>
                    Returns are subject to terms. Please see the RETURNS PAGE
                    for further information.
                  </p>
                </div>
              </section>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
