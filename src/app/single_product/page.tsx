import Image from "next/image";

export default function Single_product() {
  return (
    <div className="flex flex-col justify-around items-center gap-10 md:gap-20 mt-12 md:mt-24 mb-12 md:mb-24 px-4">
      <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-24">
        <div>
          <Image src="/image45.png" alt="" height={507} width={575} className="w-full h-auto" />
        </div>
        <div className="flex flex-col mt-11 justify-between sm:gap-7 h-auto md:h-[425px]">
          <div>
            <h1 className="font-bold font-[Inter] text-3xl md:text-5xl">
              Library Stool Chair
            </h1>
          </div>
          <div>
            <h5 className="text-white bg-[#029FAE] w-[120px] py-[6px] text-center font-semibold text-base rounded-[100px]">
              $20.00 USD
            </h5>
          </div>
          <hr />
          <div className="h-auto md:h-[101px] w-full md:w-[343px]">
            <p className="font-normal text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing
            </p>
          </div>
          <div>
            <button className="bg-[#029FAE] font-semibold text-lg text-center text-white rounded-lg py-[10px] px-[20px]">
              <i className="bi bi-cart"></i>
              Add To cart
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 md:gap-10 w-full">
        <div className="flex justify-around items-center">
          <h1 className="text-[#272343] text-2xl md:text-3xl">Featured Products</h1>
          <button className="border-b-2 border-black">
            <h3 className="font-bold text-lg font-[Inter]">View all</h3>
          </button>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-2">
          {["/Group112.png", "/Group113.png", "/Group114.png", "/Group115.png", "/Group116.png"].map((src, index) => (
            <button key={index} className="w-full sm:w-auto">
              <Image src={src} alt={`featured ${index + 1}`} width={190} height={206} className="w-full h-auto" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}