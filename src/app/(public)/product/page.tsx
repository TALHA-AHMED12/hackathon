import Image from "next/image";
import Link from "next/link";
import { Producte } from "../../../types/data";
import {client} from "@/sanity/lib/client"

 const getProducts = async ()=>{
  const products = await client.fetch(
          `
          *[_type=="products"]{
        _id,
          title,
          description,
          priceWithoutDiscount,
          badge,
          price,
          "image":image.asset->url
      }
          `
  )
  return products

}

export default async function Product() {
  const products:Producte[] = await getProducts()

// export default function Product() {
  // useSelector((state) => state);
  return (
    <div className="flex flex-col justify-center items-center mt-12 md:mt-24 px-4">
      <div className="w-full max-w-[1320px] flex flex-col gap-10">
        <div className="text-center md:text-left">
          <h1 className="text-[#272343] text-2xl md:text-3xl font-semibold">
            All Products
          </h1>
        </div>

        <div className="flex flex-wrap justify-around items-center gap-2">
          {products.map((items:Producte) => {
            return (
              <div key={items._id} className="bg-white rounded-lg overflow-hidden pb-28 max-w-sm">
                <div className="relative">
                  <Image
                    className=""
                    src={items.image}
                    alt={`logo${items.image}`}
                    width={312}
                    height={312}
                  />
                  <div className="absolute top-3 left-3 bg-[#F5813F] text-white px-2 py-1  rounded-md font-[Inter] text-sm font-medium">
                    {items.badge}
                  </div>
                </div>
                <div className="p-1">
                  {/* <h3 className="text-base font-normal font-[Inter] mb-2 text-[#272343] hover:text-[#007580]">Library Stool Chair</h3> */}

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-normal font-[Inter] text-[#272343] hover:text-[#007580]">
                        {items.title}
                      </h3>

                      <span className="font-[Inter] text-[#272343] text-lg">
                        {`$${items.price}`}
                      </span>
                    </div>
                    <Link
                          href={`/single_product/${items._id}`} 
                      className="bg-[#F0F2F3] hover:bg-[#029FAE] py-2 px-4 rounded"
                    >
                      <i className="bi bi-cart"></i>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full bg-[#1E28320D] flex flex-col justify-center items-center gap-12 md:gap-20 py-12 md:py-20">
        <div className="text-center">
          <h2 className="text-2xl md:text-5xl font-medium">
            Or subscribe to the newsletter
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <input
            className="border-b-2 py-3 pl-1 font-semibold text-base w-full md:w-[643px] text-[#1E283280]"
            type="email"
            placeholder="Email address..."
          />
          <button
            className="font-normal text-base border-b-2 text-[#1E2832] w-full md:w-[92px] h-[32px]"
            type="submit"
          >
            SUBMIT
          </button>
        </div>

        <div className="text-center">
          <h1 className="font-medium text-2xl md:text-5xl">
            Follow products and discounts on Instagram
          </h1>
        </div>

        <div className="flex flex-wrap justify-center md:justify-around items-center gap-3">
          {[
            "/card3.png",
            "/inage.png",
            "/Image.png",
            "/card2.png",
            "/item-category1.png",
            "/line.png",
          ].map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`instagram ${index + 1}`}
              width={186}
              height={186}
            />
          ))}
        </div>
      </div>
    </div>
  );
}


