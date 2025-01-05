import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  font: {
    className: string;
  };
}

export default function Footer({ font }: HeaderProps) {
  return (
    <div className={`${font.className}`}>
      <hr />
      <div className="flex flex-wrap justify-center items-start gap-12 lg:gap-24 px-4 py-8">
        {/* Logo and Socials Section */}
        <div className="flex flex-col items-start gap-6 max-w-[350px]">
          <div className="flex items-center gap-2">
            <Image src="/Logo-icon.png" alt="Logo" width={40} height={40} />
            <h1 className="text-2xl lg:text-3xl">Comforty</h1>
          </div>
          <p className="text-sm lg:text-base text-gray-600">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.
          </p>
          <div className="flex gap-3">
            {["facebook", "twitter", "instagram", "pinterest", "youtube"].map((icon) => (
              <button key={icon}>
                <Image src={`/${icon}.png`} alt={icon} width={16} height={16} />
              </button>
            ))}
          </div>
        </div>

        {/* Category Section */}
        <div className="flex flex-col gap-4">
          <h1 className="text-gray-500 text-sm lg:text-base font-medium">Category</h1>
          <ul className="flex flex-col gap-2 text-sm lg:text-base">
            {["Sofa", "Armchair", "Wing Chair", "Desk Chair", "Wooden Chair", "Park Bench"].map((item) => (
              <li key={item}>
                <Link href="/" className="text-gray-800">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support Section */}
        <div className="flex flex-col gap-4">
          <h1 className="text-gray-500 text-sm lg:text-base font-medium">Support</h1>
          <ul className="flex flex-col gap-2 text-sm lg:text-base">
            {["Help & Support", "Terms & Conditions", "Privacy Policy", "Help"].map((item) => (
              <li key={item}>
                <Link href="/" className="text-gray-800">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col gap-4 max-w-[350px]">
          <h1 className="text-gray-500 text-sm lg:text-base font-medium">Newsletter</h1>
          <div className="flex gap-2">
            <input
              className="border border-gray-300 rounded-md py-2 px-3 flex-1"
              type="email"
              placeholder="Your email"
            />
            <button className="bg-teal-500 text-white py-2 px-4 rounded-md">
              Subscribe
            </button>
          </div>
          <p className="text-sm lg:text-base text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
          </p>
        </div>
      </div>

      <hr />

      {/* Footer Bottom */}
      <div className="flex flex-wrap justify-around items-center gap-4 px-4 py-4">
        <p className="text-sm text-gray-600 text-center">
          @ 2021 - Blogy - Designed & Developed by Zakirsoft
        </p>
        <div className="flex justify-center">
          <Image src="/paypal.png" alt="Paypal" width={227} height={27} />
        </div>
      </div>
    </div>
  );
}
