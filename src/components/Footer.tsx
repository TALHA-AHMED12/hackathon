import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  font: {
    className: string;
  };
}

export default function Footer({ font }: HeaderProps) {
  return (
    <div className={`${font.className} h-[418px]`}>
      <hr />
      <div className="h-[343px] w-full flex justify-center gap-24 items-center">
        <div className=" w-auto h-[198] flex flex-col gap-6 mt-[40px]">
          <div className=" w-[168px] h-[40] flex items-center justify-center gap-2">
            <Image src="/Logo-icon.png" alt="" width={40} height={40} />
            <h1 className="text-3xl">Comforty</h1>
          </div>

          <div className="w-[350px] h-[72px]">
            <p className="font-normal text-base">
              Vivamus tristique odio sit amet velit semper, eu posuere turpis
              interdum. Cras egestas purus{" "}
            </p>
          </div>

          <div className="w-[206px] h-[38px] flex justiify-center items-center gap-4">
            <button>
              <Image src="/facebook.png" alt="" width={16} height={16} />
            </button>

            <button>
              <Image src="/twitter.png" alt="" width={16} height={16} />
            </button>

            <button>
              <Image src="/instagram.png" alt="" width={16} height={16} />
            </button>

            <button>
              <Image src="/pinterest.png" alt="" width={16} height={16} />
            </button>

            <button>
              <Image src="/youtube.png" alt="" width={16} height={16} />
            </button>
          </div>
        </div>

        <div className="w-auto h-[203] flex flex-col gap-6 mt-[40px]">
          <h1 className="text-[#9A9CAA] font-medium w-[82px] h-[15px]">
            Category
          </h1>

          <ul className="flex flex-col gap-1`">
            <li>
              <Link href="">Sofa</Link>
            </li>
            <li>
              <Link className="text-[#272343] font-normal" href="/">
                Armchair
              </Link>
            </li>
            <li>
              <Link className="text-[#272343] font-normal" href="/">
                Wing Chair
              </Link>
            </li>
            <li>
              <Link className="text-[#272343] font-normal" href="/">
                Desk Chair
              </Link>
            </li>
            <li>
              <Link className="text-[#272343] font-normal" href="/">
                wooden Chair
              </Link>
            </li>
            <li>
              <Link className="text-[#272343] font-normal" href="/">
                Park Bench
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-auto h-[143px] flex flex-col gap-6">
          <div>
            <h1 className="font-medium text-[#9A9CAA] ">Support</h1>
          </div>

          <div>
            <ul className="flex flex-col gap-1">
              <li>
                <Link className="font-normal text-base text-[#272343]" href="/">
                  Help & Support
                </Link>
              </li>
              <li>
                <Link className="font-normal text-base text-[#272343]" href="/">
                  Tearms & Conditions
                </Link>
              </li>
              <li>
                <Link className="font-normal text-base text-[#272343]" href="/">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="font-normal text-base text-[#272343]" href="/">
                  Help
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-auto h-[142px] flex flex-col gap-6">
          <div>
            <h1 className="font-medium text-[#9A9CAA]">Newsletter</h1>
          </div>

          <div className="flex gap-1">
            <input
              className="border-[#E1E3E5] py-3 pl-1"
              width="285"
              height="46"
              type="email"
              placeholder="Your email"
            />
            <button
              className="w-[127px] h-[46px] bg-[#029FAE] py-[14px] px-[24px] rounded-md"
              type="submit"
            >
              Subscribe
            </button>
          </div>

          <div className="w-[428px] h-[46px]">
            <p className=" font-normal text-[#272343]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt erat enim.
            </p>
          </div>
        </div>
      </div>

      <hr />

      <div className="w-full h-[75px] flex justify-around gap-42 items-center">
        <div className="w-auto h-[21px]">
          <h1 className="font-normal">
            @ 2021 - Blogy - Designed & Develop by Zakirsoft
          </h1>
        </div>

        <div className="w-auto">
          <Image src="/paypal.png" alt="" width={227} height={27} />
        </div>
      </div>
    </div>
  );
}
