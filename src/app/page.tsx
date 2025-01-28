import Image from "next/image";
import Link from "next/link";



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
          <Image src="/Productes.png" alt="" width={434} height={584} />
        </div>
      </div>

      {/* {logo section} */}
      <div className="w-full max-w-[1320px] h-auto flex flex-wrap justify-around items-center ">
        {[
          "/logo.png",
          "/logo1.png",
          "/logo2.png",
          "/logo3.png",
          "/logo4.png",
          "/logo5.png",
          "/logo6.png",
        ].map((src, index) => (
          <div key={index}>
            <Image src={src} alt={`logo${index}`} width={100} height={100} />
          </div>
        ))}
      </div>

      {/* {feature section} */}
      <div className="w-full max-w-[1320px] h-auto flex flex-col gap-5 p-4">
        <div className="h-auto">
          <h1 className="text-[#272343] text-3xl">Featured Products</h1>
        </div>

        <div className="flex flex-wrap justify-around items-center gap-2">
          {["/card2.png",
            "/Image.png",
            "/item-category1.png",
            "/card.png"].map((src,index) => {
            return (
              <div key={index}  className="bg-white rounded-lg overflow-hidden max-w-sm">
                <div className="relative">
                  <Image
                    className=""
                    src={src}
                    alt={`logo${src}`}
                    width={312}
                    height={312}
                  />
                  <div className="absolute top-3 left-3 bg-[#F5813F] text-white px-2 py-1  rounded-md font-[Inter] text-sm font-medium">
                    Sales
                  </div>
                </div>
                <div className="p-1">
                  {/* <h3 className="text-base font-normal font-[Inter] mb-2 text-[#272343] hover:text-[#007580]">Library Stool Chair</h3> */}

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-normal font-[Inter] text-[#272343] hover:text-[#007580]">
                        Product
                      </h3>

                      <span className="font-[Inter] text-[#272343] text-lg">
                        $74648
                      </span>
                    </div>
                    <Link href={"/product"}
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

      <div className="w-full max-w-[1320px] h-auto flex flex-col gap-5 p-4">
        <div className="h-auto">
          <h1 className="text-[#272343] text-3xl">Top categories</h1>
        </div>

        <div className="flex flex-wrap justify-around items-center gap-2">
          {["/Category.png", "/Category1.png", "/Category2.png"].map(
            (src, index) => (
              <Link href={"/product"} key={index}>
                <Image
                  src={src}
                  alt={`category${index}`}
                  width={424}
                  height={424}
                />
              </Link>
            )
          )}
        </div>
      </div>

      {/* {EXPLORE NEW AND POPULAR STYLE section} */}
      <div className="w-full max-w-[1320px] h-auto flex flex-col gap-5 p-4">
        <div className="h-auto ">
          <h1 className="text-[#272343] text-3xl">
            Explore new and popular styles
          </h1>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-2">
          <div>
            <Image src="/item-category1.png" alt="" height={648} width={648} />
          </div>

          <div className="flex flex-col justify-center items-center gap-5">
            <div className="flex flex-wrap justify-center items-center gap-2">
              {["/card.png", "/card1.png"].map((src, index) => (
                <div key={index}>
                  <Image
                    src={src}
                    alt={`card${index}`}
                    height={312}
                    width={312}
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center items-center gap-2">
              {["/card3.png", "/card2.png"].map((src, index) => (
                <div key={index}>
                  <Image
                    src={src}
                    alt={`card${index}`}
                    height={312}
                    width={312}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1320px] h-auto flex flex-col gap-20 p-4">
        <div className="h-auto">
          <h1 className="text-[#272343] text-3xl text-center">Our Products</h1>
        </div>

        <div className="flex flex-wrap justify-around items-center gap-2">
          {[
            "/card2.png",
            "/Image.png",
            "/item-category1.png",
            "/card.png",
            "/inage.png",
            "/card3.png",
            "/Image-1.png",
            "/card2.png",
          ].map((src, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden pb-28 max-w-sm">
                <div className="relative">
                  <Image
                    className=""
                    src={src}
                    alt={`logo${src}`}
                    width={312}
                    height={312}
                  />
                  <div className="absolute top-3 left-3 bg-[#F5813F] text-white px-2 py-1  rounded-md font-[Inter] text-sm font-medium">
                    Sales
                  </div>
                </div>
                <div className="p-1">
                  {/* <h3 className="text-base font-normal font-[Inter] mb-2 text-[#272343] hover:text-[#007580]">Library Stool Chair</h3> */}

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-normal font-[Inter] text-[#272343] hover:text-[#007580]">
                        Product
                      </h3>

                      <span className="font-[Inter] text-[#272343] text-lg">
                        1234$
                      </span>
                    </div>
                    <Link href={"/product"}
                      className="bg-[#F0F2F3] hover:bg-[#029FAE] py-2 px-4 rounded"
                    >
                      <i className="bi bi-cart"></i>
                    </ Link>
                  </div>
                </div>
              </div>
          ))}
        </div>

      </div>
    </div>
  );
}
