import Image from "next/image";
export default function About() {
  return (
    <div className="flex flex-col justify-center items-center gap-24 my-24">
      <div className="grid grid-cols-2 gap-5">
        <div className="h-[478px] w-[672px] pl-10 pr-15 bg-[#007580] flex flex-col justify-around">
          <div className="h-[161px] flex flex-col justify-between">
            <h1 className="font-[Inter] font-bold text-3xl text-white">
              About Us - Comforty
            </h1>
            <p className="font-[Inter] font-normal text-lg text-white">
              At Comforty, we believe that the right chair can transform your
              space and elevate your comfort. Specializing in ergonomic design,
              premium materials, and modern aesthetics, we craft chairs that
              seamlessly blend style with functionality.
            </p>
          </div>
          <div className="h-[56px] w-[179px] px-8 py-4 bg-[#F9F9F926]">
            <button className="font-normal text-base font-[Inter] text-white">
              View collection
            </button>
          </div>
        </div>
        <div className="h-[478px] w-[672px]">
          <Image src={"/imageBlock.png"} alt="" height={478} width={619} />
        </div>
      </div>

      <div className="h-[461px] flex justify-center items-center flex-col gap-7 ">
        <div className="h-[44px] ">
          <h1 className="text-[#272343] font-[Inter] font-semibold text-3xl">
            What makes our Brand Different
          </h1>
        </div>

        <div className="flex justify-between items-center gap-5">
          <button>
            <Image src={"/feature.png"} alt="" width={312} height={377} />
          </button>

          <button>
            <Image src={"/feature1.png"} alt="" width={312} height={377} />
          </button>

          <button>
            <Image src={"/feature2.png"} alt="" width={312} height={377} />
          </button>

          <button>
            <Image src={"/feature3.png"} alt="" width={312} height={377} />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-7 ">
              <div className="h-[44px] ">
                <h1 className="text-[#272343] font-[Inter] font-semibold text-3xl">Our Popular Products </h1>
              </div>
      
              <div className="flex justify-between items-center gap-5">
                <button>
                  <Image src={"/ProductCard.png"} alt="" width={630} height={462} />
                </button>
      
                <button>
                  <Image src={"/ProductCard1.png"} alt="" width={305} height={462} />
                </button>
      
                <button>
                  <Image src={"/ProductCard2.png"} alt="" width={305} height={462} />
                </button>
    
              </div>
            </div>
    </div>
  );
}
