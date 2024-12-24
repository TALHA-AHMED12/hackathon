export default function Contact() {
  return (
      <div className=" flex flex-col gap-24 mt-24 mb-10">
        <div className="flex flex-col justify-center items-center gap-5">
          <h1 className="font-semibold font-[Poppins] text-4xl ">
            Get In Touch With Us
          </h1>
          <p className="text-center font-normal text-base text-[#9F9F9F] w-[644px] h-[48px]">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>

        <div className="h-[923px] flex justify-evenly">
          <div className="h-[393px] flex flex-col justify-evenly items-center">
            <div className="flex justify-center gap-3">
              <i className="bi bi-geo-alt-fill"></i>
              <div className="w-[212px]">
                <h2 className="font-medium text-2xl font-[Poppins]">Address</h2>
                <p className=" font-normal text-base">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>

            <div className="flex justify-center gap-3">
              <i className="bi bi-telephone-fill"></i>
              <div className="w-[212px]">
                <h2 className="font-medium text-2xl font-[Poppins]">Phone</h2>
                <p className=" font-normal text-base">
                  Mobile: +(84) 546-6789 Hotline: +(84) 456-6789
                </p>
              </div>
            </div>

            <div className="flex justify-center gap-3">
              <i className="bi bi-circle-fill"></i>
              <div className="w-[212px]">
                <h2 className="font-medium text-2xl font-[Poppins]">
                  Working Time
                </h2>
                <p className=" font-normal text-base">
                  Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>

          <div className="h-[923px] flex flex-col justify-around">
            <div className="h-[121px] flex justify-between items-center flex-col">
                <h3 className="font-medium text-base">
                Your name
                </h3>
                <input
              className="border-[1px] pl-5 rounded-[10px] font-normal text-base w-[529px] h-[75px] text-[#9F9F9F]"
              type="text"
              placeholder="Abc"
            />
            </div>

            <div className="h-[121px] flex justify-between items-center flex-col">
                <h3 className="font-medium text-base">
                Email address
                </h3>
                <input
              className="border-[1px] pl-5 rounded-[10px] font-normal text-base w-[529px] h-[75px] text-[#9F9F9F]"
              type="email"
              placeholder="Abc@def.com"
            />
            </div>

            <div className="h-[121px] flex justify-between items-center flex-col">
                <h3 className="font-medium text-base">
                Subject
                </h3>
                <input
              className="border-[1px] pl-5 rounded-[10px] font-normal text-base w-[529px] h-[75px] text-[#9F9F9F]"
              type="text"
              placeholder="This is an optional"
            />
            </div>

            <div className="h-[166px] flex justify-between items-center flex-col">
                <h3 className="font-medium text-base">
                Message
                </h3>
                <input
              className="border-[1px] pl-5 rounded-[10px] font-normal text-base w-[529px] h-[120px] text-[#9F9F9F]"
              type="text"
              placeholder="Hi! i’d like to ask about"
            />
            </div>
            <button className="font-normal text-base text-white bg-[#029FAE] rounded-md border border-[#B88E2F] w-[237px] h-[55px] flex justify-center items-center">
                Submit
            </button>
          </div>

        </div>
      </div>
  );
}
