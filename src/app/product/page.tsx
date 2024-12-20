import Image from "next/image";
export default function Product() {
  return (
    <div className=" flex flex-col gap-24 justify-center items-center mt-20">
      <div className="h-[461px] flex flex-col gap-5 ">
        <div className="h-[44px] ">
          <h1 className="text-[#272343] text-3xl font-semibold">
            All Products
          </h1>
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

      <div className="flex justify-between items-center h-[461px] gap-5">
        <button>
          <Image src={"/12.png"} alt="" width={312} height={377} />
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

      <div className="flex justify-between items-center h-[461px] gap-5">
        <button>
          <Image src={"/product.png"} alt="" width={312} height={377} />
        </button>

        <button>
          <Image src={"/products1.png"} alt="" width={312} height={377} />
        </button>

        <button>
          <Image src={"/products2.png"} alt="" width={312} height={377} />
        </button>

        <button>
          <Image src={"/13.png"} alt="" width={312} height={377} />
        </button>
      </div>

      <div className="h-[755px] bg-[#1E28320D] flex flex-col justify-center items-center gap-20 w-full">
        <div className="h-[165px] flex flex-col justify-center items-center gap-20  ">
          <div>
            <h2 className="text-5xl font-medium">
              Or subscribe to the newsletter
            </h2>
          </div>

          <div className="flex justify-center items-center gap-4">
            <input
              className="border-b-8 py-3 pl-1 font-semibold text-base w-[643px] h-[32px] text-[#1E283280]"
              type="email"
              placeholder="Email address..."
            />
            <button
              className="font-normal text-base  border-b-8 text-[#1E2832] w-[92px] h-[32px]"
              type="submit"
            >
              SUBMIT
            </button>
          </div>
        </div>

        <div className="h-[319px] flex flex-col justify-center items-center gap-20">
          <div>
            <h1 className="font-medium text-5xl">
              Follow products and discounts on Instagram
            </h1>
          </div>

          <div className="flex justify-between items-center h-[461px] gap-5">
            <button>
              <Image src={"/1.png"} alt="" width={186} height={186} />
            </button>

            <button>
              <Image src={"/2.png"} alt="" width={186} height={186} />
            </button>

            <button>
              <Image src={"/3.png"} alt="" width={186} height={186} />
            </button>

            <button>
              <Image src={"/card1.png"} alt="" width={186} height={186} />
            </button>

            <button>
              <Image src={"/item-category 1.png"} alt="" width={186} height={186} />
            </button>

            <button>
              <Image src={"/4.png"} alt="" width={186} height={186} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
