import { faqs } from "@/dummyData";
import Link from "next/link";
import Navbar from "./ui/navbar";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />

      <h1 className="text-center max-w-[90%] mx-auto mb-4">
        The platform for underserved Nigerians to speak up and be heard
      </h1>

      <p className="max-w-[50ch] mx-auto text-center mb-8 text-lg">
        Report issues in your area and help local authorities take action — no
        smartphone, no internet, no problem.
      </p>

      <div className="flex gap-4 justify-center mb-20">
        <Link
          href="/auth"
          className="bg-[#10613A] text-[#F4F4F4] px-8 font-medium py-4 rounded-lg"
        >
          Use web version
        </Link>
        <Link
          href="/about"
          className="text-[#10613A] px-8 font-medium bg-[#10613A]/10 py-4 rounded-lg"
        >
          Use USSD - <span className="font-bold">*384*60#</span>
        </Link>
      </div>

      {faqs.map((faq) => (
        <div
          key={faq.id}
          className="w-4/5 mx-auto rounded-lg bg-[#10613A]/5 py-4 px-5 mb-4"
        >
          <p className="font-semibold text-[#333333] mb-2">{faq.question}</p>
          <p>{faq.answer}</p>
        </div>
      ))}

      <Footer />
    </main>
  );
}
