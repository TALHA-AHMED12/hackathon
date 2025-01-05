import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 justify-center items-center mb-24">
      <div className="w-full max-w-[1320px] h-auto bg-[#F0F2F3] flex flex-col lg:flex-row justify-evenly items-center p-4 lg:p-0">
        <div className="w-full lg:w-[560px] h-auto flex flex-col gap-5">
          <h1 className="text-[#272343] font-normal text-sm">
            WELCOME TO CHAIRY
          </h1>
          <h1 className="font-bold text-3xl lg:text-6xl text-[#272343]">
            Best Furniture Collection for your interior.
          </h1>
          <button className="bg-[#029FAE] py-3 w-[170px] border rounded-lg text-white">
            Shop Now <i className="bi bi-arrow-right"></i>
          </button>
        </div>

        <div className="pt-32 pb-36">
          <Image src="/product-image.png" alt="" width={434} height={584} />
        </div>
      </div>

      <div className="w-full max-w-[1320px] h-auto flex flex-wrap justify-around items-center ">
        {["/logo.png", "/logo1.png", "/logo2.png", "/logo3.png", "/logo4.png", "/logo5.png", "/logo6.png"].map((src, index) => (
          <div key={index}>
            <Image src={src} alt={`logo${index}`} width={100} height={100} />
          </div>
        ))}
      </div>

      <div className="w-full max-w-[1320px] h-auto flex flex-col gap-5 p-4">
        <div className="h-auto">
          <h1 className="text-[#272343] text-3xl">Featured Products</h1>
        </div>

        <div className="flex flex-wrap justify-around items-center gap-2">
          {["/products.png", "/products1.png", "/products2.png", "/products3.png"].map((src, index) => (
            <button key={index}>
              <Image src={src} alt={`product${index}`} width={312} height={377} />
            </button>
          ))}
        </div>
      </div>

      <div className="w-full max-w-[1320px] h-auto flex flex-col gap-5 p-4">
        <div className="h-auto">
          <h1 className="text-[#272343] text-3xl">Top categories</h1>
        </div>

        <div className="flex flex-wrap justify-around items-center gap-2">
          {["/Category.png", "/Category1.png", "/Category2.png"].map((src, index) => (
            <button key={index}>
              <Image src={src} alt={`category${index}`} width={424} height={424} />
            </button>
          ))}
        </div>
      </div>

      <div className="w-full max-w-[1320px] h-auto flex flex-col gap-5 p-4">
        <div className="h-auto ">
          <h1 className="text-[#272343] text-3xl">Explore new and popular styles</h1>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-2">
          <div>
            <button>
              <Image src="/item-category1.png" alt="" height={648} width={648} />
            </button>
          </div>

          <div className="flex flex-col justify-center items-center gap-5">
            <div className="flex flex-wrap justify-center items-center gap-2">
              {["/card.png", "/card1.png"].map((src, index) => (
                <button key={index}>
                  <Image src={src} alt={`card${index}`} height={312} width={312} />
                </button>
              ))}
            </div>

            <div className="flex flex-wrap justify-center items-center gap-2">
              {["/card3.png", "/card2.png"].map((src, index) => (
                <button key={index}>
                  <Image src={src} alt={`card${index}`} height={312} width={312} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1320px] h-auto flex flex-col gap-5 p-4">
        <div className="h-auto">
          <h1 className="text-[#272343] text-3xl">Top categories</h1>
        </div>

        <div className="flex flex-wrap justify-around items-center gap-2">
          {["/products.png", "/products1.png", "/products2.png", "/products3.png"].map((src, index) => (
            <button key={index}>
              <Image src={src} alt={`product${index}`} width={312} height={377} />
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-around items-center gap-2">
          {["/product.png", "/product1.png", "/product2.png", "/product3.png"].map((src, index) => (
            <button key={index}>
              <Image src={src} alt={`product${index}`} width={312} height={377} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}