import Image from "next/image";
export default function Cart() {
  return (
    <div className="flex justify-center mt-24">
      <div className="h-[547px]  flex flex-col">
        <div>
          <h1 className="font-[Inter] font-medium text-2xl text-[#111111]">
            Bag
          </h1>
        </div>

        <div className="h-[211px] w-[963px] flex justify-center items-center">
          <div className="h-[163px] w-[933px] flex justify-center items-center gap-5 ">
            <div>
              <Image
                src={"/item-category 1.png"}
                alt=""
                width={150}
                height={150}
              />
            </div>

            <div className="w-[753px] h-[163px] flex flex-col justify-around">
              <div className="h-[105px] w-[687px] flex justify-between items-center">
                <div className="h-[105px] w-[235px] flex flex-col gap-5">
                  <div>
                    <h3 className="text-[#272343] font-normal text-base">
                      Library Stool Chair
                    </h3>
                  </div>

                  <div>
                    <p className="text-[#757575] font-normal text-base">
                      Ashen Slate/Cobalt Bliss
                    </p>

                    <div className="h-[28px] w-[235px] flex">
                      <div className="h-[28px] w-[97px] flex gap-3">
                        <p className="text-[#757575] font-normal text-base w-[30px] h-[28px]">
                          Size
                        </p>

                        <p className="text-[#757575] font-normal text-base w-[67px] h-[28px]">
                          L
                        </p>
                      </div>

                      <div className="w-[118px] h-[28px] flex gap-3">
                        <p className="text-[#757575] font-normal text-base w-[61px] h-[28px]">
                          Quantity
                        </p>

                        <p className="text-[#757575] font-normal text-base w-[58px] h-[28px]">
                          1
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                    <h3 className="font-[Inter] font-normal text-base text-[#111111]">MRP: $99</h3>
                </div>

              </div>

              <div className="w-[537px] h-[34px] flex gap-5 items-center">
                  <div>
                    <i className="bi bi-heart"></i>
                  </div>

                  <div>
                    <i className="bi bi-trash3"></i>
                  </div>
                </div>

            </div>
          </div>
        </div>
        <hr />
        <div className="h-[211px] w-[963px] flex justify-center items-center">
          <div className="h-[163px] w-[933px] flex justify-center items-center gap-5 ">
            <div>
              <Image
                src={"/Frame.png"}
                alt=""
                width={150}
                height={150}
              />
            </div>

            <div className="w-[753px] h-[163px] flex flex-col justify-around">
              <div className="h-[105px] w-[687px] flex justify-between items-center">
                <div className="h-[105px] w-[235px] flex flex-col gap-5">
                  <div>
                    <h3 className="text-[#272343] font-normal text-base">
                      Library Stool Chair
                    </h3>
                  </div>

                  <div>
                    <p className="text-[#757575] font-normal text-base">
                      Ashen Slate/Cobalt Bliss
                    </p>

                    <div className="h-[28px] w-[235px] flex">
                      <div className="h-[28px] w-[97px] flex gap-3">
                        <p className="text-[#757575] font-normal text-base w-[30px] h-[28px]">
                          Size
                        </p>

                        <p className="text-[#757575] font-normal text-base w-[67px] h-[28px]">
                          L
                        </p>
                      </div>

                      <div className="w-[118px] h-[28px] flex gap-3">
                        <p className="text-[#757575] font-normal text-base w-[61px] h-[28px]">
                          Quantity
                        </p>

                        <p className="text-[#757575] font-normal text-base w-[58px] h-[28px]">
                          1
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                    <h3 className="font-[Inter] font-normal text-base text-[#111111]">MRP: $99</h3>
                </div>

              </div>

              <div className="w-[537px] h-[34px] flex gap-5 items-center">
                  <div>
                    <i className="bi bi-heart"></i>
                  </div>

                  <div>
                    <i className="bi bi-trash3"></i>
                  </div>
                </div>

            </div>
          </div>
        </div>

      </div>
      <div className="h-[295px] w-[350px] flex flex-col justify-center gap-7">
        <div>
          <h1 className="font-medium text-xl font-[Inter] text-[#111111]">
          Summary
          </h1>
        </div>
        <div className="flex flex-col justify-center gap-5">
          <div className="flex justify-between items-center">
            <h3 className="font-normal text-base font-[Inter] text-[#111111]">
            Subtotal
            </h3>
            <h3 className="font-normal text-base font-[Inter] text-[#111111]">
            $198.00
            </h3>
          </div>
          <div className="flex justify-between items-center">
          <h3 className="font-normal text-base font-[Inter] text-[#111111]">
          Estimated Delivery & Handling
            </h3>
            <h3 className="font-normal text-base font-[Inter] text-[#111111]">
            Free
            </h3>
          </div>
          <hr/>
          <div className="flex justify-between items-center">
          <h3 className="font-normal text-base font-[Inter] text-[#111111]">
          Total
            </h3>
            <h3 className="font-medium text-base font-[Inter] text-[#111111]">
            $198.00
            </h3>
          </div>
          <hr />
          <div>
            <button className="font-medium font-[Inter] text-base bg-[#029FAE] py-[18px] px-[100px] rounded-[30px] text-white">
            Member Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
