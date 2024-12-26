import Image from "next/image";
export default function Single_product() {
  return (
    <div className="flex flex-col justify-around items-center gap-20 mt-24 mb-24">
      <div className="flex justify-center gap-24">
        <div>
          <Image src={"/image45.png"} alt="" height={507} width={575} />
        </div>
        <div className="flex flex-col justify-between h-[425px]">
          <div>
            <h1 className="font-bold font-[Inter] w-[341px] text-5xl ">
              Library Stool Chair
            </h1>
          </div>
          <div>
            <h5 className="text-white  bg-[#029FAE] w-[120px] py-[6px] text-center font-semibold text-base rounded-[100px]">
              $20.00 USD
            </h5>
          </div>
          <hr />
          <div className="h-[101px] w-[343px]">
            <p className="font-normal text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur
              adipiscing
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
      <div className=" flex flex-col gap-10 ">
        <div className="flex justify-between items-center">
          <div className=" ">
            <h1 className="text-[#272343] text-3xl">Featured Products</h1>
          </div>
          <button className="border-b-2 border-black">
            <h3 className="font-bold text-lg font-[Inter]">View all</h3>
          </button>
        </div>

        <div className="flex justify-between items-center gap-5">
          <button>
            <Image src={"/Group112.png"} alt="" width={190} height={206} />
          </button>

          <button>
            <Image src={"/Group113.png"} alt="" width={190} height={206} />
          </button>

          <button>
            <Image src={"/Group114.png"} alt="" width={190} height={206} />
          </button>

          <button>
            <Image src={"/Group115.png"} alt="" width={190} height={206} />
          </button>

          <button>
            <Image src={"/Group116.png"} alt="" width={190} height={206} />
          </button>
        </div>
      </div>
    </div>
  );
}
