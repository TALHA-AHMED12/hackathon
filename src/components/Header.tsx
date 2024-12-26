import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  font: {
    className: string;
  };
}

export default function Header({ font }: HeaderProps) {
  return (
    <div className={`${font.className} min-w-full`}>
      <div className=" w-auto h-[45px] bg-[#272343] flex justify-around items-center">
        <div className="flex justify-center items-center gap-3 ">
          <i className="bi bi-check-lg text-white"></i>
          <h5 className="text-white">Free shipping on all orders over $50</h5>
        </div>
        <div className="w-[202px] h-[17px] flex justify-center items-center gap-3 ">
          <button className=" text-white flex">
            <h5>Eng</h5>
            <i className="bi bi-chevron-down"></i>
          </button>

          <Link href={"/faq"}>
            <h5 className="text-white">Faqs</h5>
          </Link>

          <button className="flex gap-1 text-sm">
            <i className="bi bi-exclamation-circle text-white"></i>
            <h5 className="text-white">Need Help</h5>
          </button>
        </div>
      </div>

      <div className="bg-[#F0F2F3] w-auto h-[84px] flex justify-around items-center">
        <div className=" w-[166px] h-[40] flex items-center justify-center gap-2">
          <Image src="/Logo-icon.png" alt="" width={40} height={40} />
          <h1 className="text-3xl">Comforty</h1>
        </div>

        <div className="w-[120px] h-[44px]  bg-white flex items-center justify-center rounded-sm  ">
          <Link href="/cart" className="flex  gap-2">
            <Image src="/group.png" alt="" width={17} height={17} />
            Cart
            <Image src="/no.png" alt="" width={20} height={20} />
          </Link>
        </div>
      </div>

      <div className="w-auto h-[74px] flex justify-around items-center">
        <nav className="w-[339px] h-[15px] ">
          <ul className="flex gap-5">
            <li className="text-[#636270]">
              <Link href="/">Home</Link>
            </li>
            <li className="text-[#636270]">
              <Link href="/shop">Shop</Link>
            </li>
            <li className="text-[#636270]">
              <Link href="/product">Product</Link>
            </li>
            <li className="text-[#636270]">
              <Link href="/pages">Pages</Link>
            </li>
            <li className="text-[#636270]">
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Link href={"/contact"} className="flex gap-2 ">
          <h5 className="text-[#636270]">Contact:</h5>
          <p className="text-[#272343]">(808) 555-0111</p>
        </Link>
      </div>
      <hr />
    </div>
  );
}
