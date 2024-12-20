import Image from "next/image";
export default function About() {
  return(
    <div className="flex flex-col justify-center items-center">
      <div className="grid grid-cols-2">
        <div className="h-[478px] w-[672px] pl-14 pr-20 bg-[#007580] flex flex-col justify-around">
          <div className="h-[161px] flex flex-col justify-between">
            <h1 className="font-[Inter] font-bold text-3xl text-white">
            About Us - Comforty
            </h1>
            <p className="font-[Inter] font-normal text-lg text-white">
            At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality. 
            </p>
          </div>
          <div className="h-[56px] w-[179px] px-8 py-4 bg-[#F9F9F926]">
            <button className="font-normal text-base font-[Inter] text-white">
            View collection
            </button>
          </div>
        </div>
        <div>
          <Image src={"/card1.png"} alt="" height={480} width={620}/>
        </div>
      </div>
    </div>
  )
}