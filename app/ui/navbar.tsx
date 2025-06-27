import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-12 mb-10">
      <Link href="/">
        <Image
          src="/logo.svg"
          height={56}
          width={96}
          className="h-14 w-auto"
          alt="Tella Logo"
        />
      </Link>

      <Link
        href="/auth"
        className="text-[#10613A] px-8 font-medium border-2 border-[#10613A] py-4 rounded-lg"
      >
        Report an issue
      </Link>
    </nav>
  );
};

export default Navbar;
