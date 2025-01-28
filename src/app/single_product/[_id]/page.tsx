import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { Producte } from "@/types/data";
import { fetchProductById } from "@/types/fetchProductById";
import { AddToCartButton } from '@/actions/AddToCartButton';

export default async function SlugPage({ params }: { params: { _id: string } }) {
  // Fetch the product details from Sanity (or your backend)
  const product: Producte = await fetchProductById(params._id);

  if (!product) {
    return <div>Product not found</div>; // Graceful fallback for missing product
  }

  return (
    <div className="flex flex-col justify-around items-center gap-16 md:gap-20 mt-12 md:mt-24 px-4">
      {/* Product Details Section */}
      <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-24">
        <div>
          <Image
            src={urlFor(product.image).url()}
            alt={product.title}
            height={507}
            width={575}
            className=""
          />
        </div>
        <div className="flex flex-col mt-11 justify-between sm:h-[300px] md:h-[425px]">
          <div>
            <h1 className="font-bold text-3xl md:text-5xl">{product.title}</h1>
          </div>
          <div>
            <h5 className="text-white bg-[#029FAE] w-[120px] py-[6px] text-center font-semibold text-base rounded-[100px]">
              ${product.price} USD
            </h5>
          </div>
          <hr />
          <div className="h-auto md:h-[101px] w-full md:w-[343px]">
            <p className="font-normal text-sm">{product.description}</p>
          </div>
          <div className="gap-5 flex justify-start items-center">
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="flex flex-col gap-5 md:gap-10 w-full">
        <div className="flex justify-around items-center">
          <h1 className="text-[#272343] text-2xl md:text-3xl">Featured Products</h1>
          <Link href="/products">
            <button className="border-b-2 border-black">
              <h3 className="font-bold text-lg">View All</h3>
            </button>
          </Link>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-2">
          {["/Image-1.png", "/card2.png", "/line.png", "/item-category1.png", "/inage.png"].map(
            (src, index) => (
              <div key={index} className="bg-white pb-24 rounded-lg overflow-hidden max-w-sm">
                <div className="relative">
                  <Image src={src} alt={`logo${src}`} width={270} height={263} />
                  <div className="absolute top-3 left-3 bg-[#F5813F] text-white px-2 py-1 rounded-md">
                    Sales
                  </div>
                </div>
                <div className="p-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-normal text-[#272343]">Library Stool Chair</h3>
                      <span className="text-[#272343] text-lg">$20</span>
                    </div>
                    <Link
                      href="/product"
                      className="bg-[#F0F2F3] hover:bg-[#029FAE] py-2 px-4 rounded"
                    >
                      <i className="bi bi-cart"></i>
                    </Link>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}