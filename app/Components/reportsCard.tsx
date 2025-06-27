"use client";
import { reports } from "@/dummyData";
import Image from "next/image";
import placeholderImg from "../Assets/placeholder.png";
import { useState } from "react";
interface ReportsCardProps {
  item: {
    images: {
      id: string;
      dataurl: string;
    };
    title: string;
    description: string;
    issueType: string;
    submittedBy: {
      name: string;
    };
    location: string;
    status: string;
  };
}

const ReportsCard = ({ item }: ReportsCardProps) => {
  return (
    <div className="max-w-2xl py-3 flex items-center mx-auto">
      <div className="flex items-center cursor-pointer hover:scale-105 transition-all justify-between w-full py-5 border-b border-gray-200 gap-4">
        <Image  
          className="h-28 w-28 rounded-2xl hover:scale-105 transition-all cursor-pointer object-cover"
          src={placeholderImg}
          alt={"img"}
        />
        <div className="flex flex-col w-[80%] gap-1">
          <h5 className="font-semibold tracking-wide text-xl text-black">
            {item?.title}
          </h5>
          <p className="text-gray-700 leading-6 text-sm w-[80%]">
            {item?.description}{" "}
          </p>

          <div className="flex items-center gap-2 text-xs font-semibold">
            <p> {item?.issueType} </p>
            <p> | {item?.location}</p>
          </div>
        </div>
      </div>

      <button
        className={`p-2 text-sm rounded-lg shadow ${
          item?.status === "in_progress" && "bg-[#FEBD3A] "
        } text-white ${item?.status === "pending" && "bg-[#FEBD3A]"} ${
          item?.status === "resolved" && "bg-[#10613A]"
        }`}
      >
        {item?.status}
      </button>
    </div>
  );
};

export default ReportsCard;
