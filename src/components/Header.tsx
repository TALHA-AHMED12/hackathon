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
      <div className="w-auto h-auto bg-[#272343] flex flex-col md:flex-row justify-around items-center p-2 md:p-0">
        <div className="flex justify-center py-1 items-center gap-3 mb-2 md:mb-0">
          <i className="bi bi-check-lg text-white"></i>
          <h5 className="text-white text-center md:text-left">Free shipping on all orders over $50</h5>
        </div>
        <div className="w-full py-1 md:w-[202px] h-auto flex justify-center items-center gap-3">
          <button className="text-white flex">
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

      <div className="bg-[#F0F2F3] w-auto h-auto flex flex-col md:flex-row justify-around items-center p-2 md:p-0">
        <div className="w-full py-3 md:w-[166px] h-auto flex items-center justify-center gap-2 mb-2 md:mb-0">
          <Image src="/Logo-icon.png" alt="" width={40} height={40} />
          <h1 className="text-3xl">Comforty</h1>
        </div>
        <div className="w-full py-2 md:w-[120px] h-auto bg-white flex items-center justify-center rounded-sm">
          <Link href="/cart" className="flex gap-2">
            <Image src="/group.png" alt="" width={17} height={17} />
            Cart
            <Image src="/no.png" alt="" width={20} height={20} />
          </Link>
        </div>
      </div>

      <div className="w-auto h-auto flex flex-col md:flex-row justify-around items-center p-2 md:p-0">
        <nav className="w-full py-4 md:w-[339px] h-auto mb-2 md:mb-0">
          <ul className="flex flex-col md:flex-row gap-5">
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
        <Link href={"/contact"} className="flex py-4 gap-2">
          <h5 className="text-[#636270]">Contact:</h5>
          <p className="text-[#272343]">(808) 555-0111</p>
        </Link>
      </div>
      <hr />
    </div>
  );
}