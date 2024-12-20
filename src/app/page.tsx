import Image from "next/image";

export default function Home() {
  return (
    <div className=" flex flex-col gap-24 justify-center items-center mb-24">
      <div className="w-[1320px] h-[850px] bg-[#F0F2F3] flex justify-evenly items-center">
        <div className="w-[560px] h-[337]  flex flex-col gap-5">
          <h1 className="text-[#272343] font-normal text-sm">
            Welcome to chairy
          </h1>
          <h1 className="font-bold text-6xl text-[#272343]">
            Best Furniture Collection for your interior.
          </h1>
          <button className="bg-[#029FAE] py-3 w-[170px] border rounded-lg text-white">
            Shop Now <i className="bi bi-arrow-right"></i>
          </button>
        </div>

        <div>
          <Image src="/product-image.png" alt="" width={434} height={584} />
        </div>
      </div>

      <div className="w-[1320px] h-[140px] flex justify-between items-center">
        <div>
          <Image src={"/logo.png"} alt="" width={85} height={87} />
        </div>

        <div>
          <Image src={"/logo1.png"} alt="" width={107} height={109} />
        </div>

        <div>
          <Image src={"/logo2.png"} alt="" width={135} height={139} />
        </div>

        <div>
          <Image src={"/logo3.png"} alt="" width={63} height={65} />
        </div>

        <div>
          <Image src={"/logo4.png"} alt="" width={98} height={101} />
        </div>

        <div>
          <Image src={"/logo5.png"} alt="" width={113} height={115} />
        </div>

        <div>
          <Image src={"/logo6.png"} alt="" width={84} height={87} />
        </div>
      </div>

      <div className="h-[461px] flex flex-col gap-5 ">
        <div className="h-[44px] ">
          <h1 className="text-[#272343] text-3xl">Featured Products</h1>
        </div>

        <div className="flex justify-between items-center gap-5">
          <button>
            <Image src={"/products.png"} alt="" width={312} height={377} />
          </button>

          <button>
            <Image src={"/products1.png"} alt="" width={312} height={377} />
          </button>

          <button>
            <Image src={"/products2.png"} alt="" width={312} height={377} />
          </button>

          <button>
            <Image src={"/products3.png"} alt="" width={312} height={377} />
          </button>
        </div>
      </div>

      <div className="h-[510px] flex flex-col gap-5 ">
        <div className="h-[44px] ">
          <h1 className="text-[#272343] text-3xl">Top categories</h1>
        </div>

        <div className="flex justify-between items-center gap-5">
          <button>
            <Image src={"/Category.png"} alt="" width={424} height={424} />
          </button>

          <button>
            <Image src={"/Category1.png"} alt="" width={424} height={424} />
          </button>

          <button>
            <Image src={"/Category2.png"} alt="" width={424} height={424} />
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center">
        {/* <div className="transform -rotate-90">
          <h1 className="font-normal text-4xl">Explore new and popular styles</h1>
        </div> */}

        <div className="flex justify-center items-center gap-5">

          <div>

            <button>
              <Image
                src={"/item-category 1.png"}
                alt=""
                height={648}
                width={648}
              />
            </button>

          </div>

          <div className="flex flex-col justify-center items-center gap-5">

            <div className="flex justify-center items-center gap-5">

              <button>
                <Image src={"/card.png"} alt="" height={312} width={312} />
              </button>

              <button>
                <Image src={"/card1.png"} alt="" height={312} width={312} />
              </button>

            </div>

            <div  className="flex justify-center items-center gap-5">

              <button>
                <Image src={"/card3.png"} alt="" height={312} width={312} />
              </button>

              <button>
                <Image src={"/card2.png"} alt="" height={312} width={312} />
              </button>

            </div>

          </div>

        </div>

      </div>

      

      <div className=" flex flex-col gap-5 ">
        <div className="h-[44px] ">
          <h1 className="text-[#272343] text-3xl">Top categories</h1>
        </div>

        <div className="flex justify-between items-center gap-5">
          <button>
            <Image src={"/products.png"} alt="" width={312} height={377} />
          </button>

          <button>
            <Image src={"/products1.png"} alt="" width={312} height={377} />
          </button>

          <button>
            <Image src={"/products2.png"} alt="" width={312} height={377} />
          </button>

          <button>
            <Image src={"/products3.png"} alt="" width={312} height={377} />
          </button>
        </div>

        <div className="flex justify-between items-center gap-5">
          <button>
            <Image src={"/product.png"} alt="" width={312} height={377} />
          </button>

          <button>
            <Image src={"/product1.png"} alt="" width={312} height={377} />
          </button>

          <button>
            <Image src={"/product2.png"} alt="" width={312} height={377} />
          </button>

          <button>
            <Image src={"/product3.png"} alt="" width={312} height={377} />
          </button>
        </div>
      </div>
    </div>
  );
}
