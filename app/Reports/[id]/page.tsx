"use client";
import Navbar from "@/app/ui/navbar";
import { reports } from "@/dummyData";
import { useParams } from "next/navigation";
import Image from "next/image";
import placeholderImg from "@/app/Assets/placeholder.png";
import Footer from "@/app/Components/Footer";
const ReportsDetails = () => {
  const params = useParams();
  return (
    <>
      <main className="py-8">
        <Navbar />

        <div className="max-w-2xl mx-auto">
          {reports.map(
            (item) =>
              item?.id === params.id && (
                <div className="flex items-center">
                  <div>
                    <h2>{item?.title}</h2>
                    <p className="w-md py-3 leading-7">{item?.description}</p>
                    <p className="font-bold text-sm">
                      {item?.issueType} | {item?.location}
                    </p>
                  </div>
                </div>
              )
          )}

          <div className="flex items-center mx-auto gap-9 py-4">
            <Image
              className="h-32 w-32 rounded-2xl hover:scale-105 transition-all cursor-pointer object-cover"
              src={placeholderImg}
              alt={"img"}
            />
            <Image
              className="h-32 w-32 rounded-2xl hover:scale-105 transition-all cursor-pointer object-cover"
              src={placeholderImg}
              alt={"img"}
            />
          </div>

          <div className="py-5">
            <select
              className="p-4 cursor-pointer outline-none w-[70%] bg-[#10613A0D] rounded-lg"
              name=""
              id=""
            >
              <option value="">Pending</option>
              <option value="">In Review</option>
              <option value="">Resolved</option>
            </select>
          </div>

          <div className="flex flex-col gap-2 py-4">
            <label htmlFor="">Type A short Message</label>
            <textarea
              className="bg-[#10613A0D] outline-gray-300"
              cols={50}
              rows={6}
              name=""
              id=""
            ></textarea>
          </div>

          <div className="flex items-center gap-3">
            <button className="bg-[#10613A] hover:scale-105 transition-all cursor-pointer py-4 px-10 rounded-xl text-white">
              Update Status
            </button>
            <button className="bg-[#10613A0D] hover:scale-105 transition-all cursor-pointer text-[#10613A] py-4 px-10 rounded-xl font-semibold">
              Contact Sender
            </button>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};
export default ReportsDetails;
