import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col justify-around items-center gap-12 md:gap-24 my-12 md:my-24 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 w-full max-w-[1320px]">
        <div className="h-auto md:h-auto w-full md:w-full p-6 md:pl-10 md:pr-15 bg-[#007580] flex flex-col justify-around">
          <div className="flex flex-col justify-between gap-4 md:gap-0">
            <h1 className="font-[Inter] font-bold text-2xl md:text-3xl text-white">
              About Us - Comforty
            </h1>
            <p className="font-[Inter] font-normal text-base md:text-lg text-white">
              At Comforty, we believe that the right chair can transform your
              space and elevate your comfort. Specializing in ergonomic design,
              premium materials, and modern aesthetics, we craft chairs that
              seamlessly blend style with functionality.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <button className="font-normal text-base font-[Inter] text-white bg-[#F9F9F926] px-6 md:px-8 py-3 md:py-4">
              View collection
            </button>
          </div>
        </div>
        <div className="w-full">
          <Image 
            src="/imageBlock.png" 
            alt="" 
            height={478} 
            width={619}
            className="w-full h-auto object-cover" 
          />
        </div>
      </div>

      <div className="w-full max-w-[1320px] flex flex-col gap-7 px-4">
        <div className="text-center md:text-left">
          <h1 className="text-[#272343] font-[Inter] font-semibold text-2xl md:text-3xl">
            What makes our Brand Different
          </h1>
        </div>

        <div className="flex flex-wrap justify-center md:justify-around items-center gap-2">
          {["/feature.png", "/feature1.png", "/feature2.png", "/feature3.png"].map((src, index) => (
            <button key={index} className="w-full sm:w-auto">
              <Image 
                src={src} 
                alt={`feature ${index + 1}`} 
                width={312} 
                height={377}
                className="w-full h-auto" 
              />
            </button>
          ))}
        </div>
      </div>

      <div className="w-full max-w-[1320px] flex flex-col gap-7 px-4">
        <div className="text-center md:text-left">
          <h1 className="text-[#272343] font-[Inter] font-semibold text-2xl md:text-3xl">
            Our Popular Products
          </h1>
        </div>

        <div className="flex flex-wrap justify-center md:justify-around items-center gap-2">
          <button className="w-full md:w-auto">
            <Image 
              src="/ProductCard.png" 
              alt="product 1" 
              width={630} 
              height={462}
              className="w-full h-auto" 
            />
          </button>
          {["/ProductCard1.png", "/ProductCard2.png"].map((src, index) => (
            <button key={index} className="w-full sm:w-[48%] md:w-auto">
              <Image 
                src={src} 
                alt={`product ${index + 2}`} 
                width={305} 
                height={462}
                className="w-full h-auto" 
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}