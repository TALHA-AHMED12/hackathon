import Image from "next/image";

export default function Product() {
  return (
    <div className="flex flex-col gap-12 md:gap-24 justify-center items-center mt-12 md:mt-24 px-4">
      <div className="w-full max-w-[1320px] flex flex-col gap-5">
        <div className="text-center md:text-left">
          <h1 className="text-[#272343] text-2xl md:text-3xl font-semibold">
            All Products
          </h1>
        </div>

        <div className="flex flex-wrap justify-center md:justify-around items-center gap-2">
          {["/products.png", "/products1.png", "/products2.png", "/products3.png"].map((src, index) => (
            <button key={index} className="w-full sm:w-auto">
              <Image src={src} alt={`product ${index + 1}`} width={312} height={377} className="w-full h-auto" />
            </button>
          ))}
        </div>
      </div>

      <div className="w-full max-w-[1320px] flex flex-wrap justify-center md:justify-around items-center gap-2">
        {["/12.png", "/product1.png", "/product2.png", "/product3.png"].map((src, index) => (
          <button key={index} className="w-full sm:w-auto">
            <Image src={src} alt={`product ${index + 1}`} width={312} height={377} className="w-full h-auto" />
          </button>
        ))}
      </div>

      <div className="w-full max-w-[1320px] flex flex-wrap justify-center md:justify-around items-center gap-2">
        {["/product.png", "/products1.png", "/products2.png", "/13.png"].map((src, index) => (
          <button key={index} className="w-full sm:w-auto">
            <Image src={src} alt={`product ${index + 1}`} width={312} height={377} className="w-full h-auto" />
          </button>
        ))}
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

        <div className="flex flex-wrap justify-center md:justify-around items-center gap-1">
          {["/1.png", "/2.png", "/3.png", "/card1.png", "/item-category1.png", "/4.png"].map((src, index) => (
            <button key={index} className="w-full sm:w-auto">
              <Image src={src} alt={`instagram ${index + 1}`} width={186} height={186} className="w-full h-auto" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}