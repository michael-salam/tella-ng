import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="p-4 text-sm bg-[#10613A] text-[#F4F4F4] flex items-center justify-between mt-20 rounded-lg mb-4">
      <p>&copy; {new Date().getFullYear()} Tella. All rights reserved.</p>
      <Link href="/privacy" className="hover:underline">
        Privacy Policy
      </Link>
    </footer>
  );
};

export default Footer;
