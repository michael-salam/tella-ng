"use client";

import { redirect } from "next/navigation";
import Navbar from "../ui/navbar";
import { useState } from "react";
import ReportsCard from "../Components/reportsCard";

const SendAReportPage = () => {
  const userString = localStorage.getItem("user");

  if (!userString) redirect("/auth/signin");

  const [formData, setFormData] = useState<{
    location: string;
    issueType: string;
    title: string;
    description: string;
    image: string | null; // store as data URL
  }>({
    location: "",
    issueType: "",
    title: "",
    description: "",
    image: null,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const reportsString = localStorage.getItem("reports");
    const reports = reportsString ? JSON.parse(reportsString) : [];
    reports.push({
      ...formData,
      createdAt: new Date().toISOString(),
    });
    localStorage.setItem("reports", JSON.stringify(reports));
    alert("Report submitted successfully!");
    setFormData({
      location: "",
      issueType: "",
      title: "",
      description: "",
      image: null,
    });
  };

  return (
    <main>
      <Navbar />

      <h1 className="mb-4 text-center">Send a report</h1>
      <p className="text-center mb-16">
        Let us know what&apos;s wrong in your area. We&apos;re listening.
      </p>

      <form onSubmit={handleSubmit} className="w-3/5 mx-auto mb-28">
        <div className="mb-4">
          <label htmlFor="location" className="mb-2">
            Location
          </label>
          <input
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
            }
            value={formData.location}
            type="text"
            name="location"
            id="location"
            className="bg-[#10613A]/5 px-4 py-2 rounded-lg block w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="issue" className="mb-2">
            Issue
          </label>
          <select
            onChange={(e) =>
              setFormData({ ...formData, issueType: e.target.value })
            }
            value={formData.issueType}
            name="issue"
            id="issue"
            className="bg-[#10613A]/5 px-4 py-2 rounded-lg block w-full"
          >
            <option value="">Select an issue</option>
            <option value="pothole">Pothole</option>
            <option value="streetlight">Broken Streetlight</option>
            <option value="garbage">Garbage</option>
            <option value="water">Water Leakage</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="title" className="mb-2">
            Title
          </label>
          <input
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            value={formData.title}
            type="text"
            name="title"
            id="title"
            className="bg-[#10613A]/5 px-4 py-2 rounded-lg block w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="mb-2">
            Description
          </label>
          <textarea
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            value={formData.description}
            name="description"
            id="description"
            className="bg-[#10613A]/5 px-4 py-2 rounded-lg block w-full"
          ></textarea>
        </div>
        <div className="mb-8">
          <label htmlFor="image" className="mb-2 block">
            Image (optional)
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={(e) => {
              const file =
                e.target.files && e.target.files[0] ? e.target.files[0] : null;
              if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  setFormData({ ...formData, image: reader.result as string });
                };
                reader.readAsDataURL(file);
              } else {
                setFormData({ ...formData, image: null });
              }
            }}
            className="block w-full"
          />
          {formData.image && (
            <div className="mt-2 flex flex-wrap gap-2">
              <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded">
                <span className="text-sm text-gray-700">Image selected</span>
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              {/* Image preview */}
              <img
                src={formData.image}
                alt="Preview"
                className="mt-2 max-h-32 rounded border"
                style={{ maxWidth: "100%", objectFit: "contain" }}
              />
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-[#10613A] text-white font-medium rounded-lg hover:bg-[#0d4f2a] transition-colors"
        >
          Submit report
        </button>
      </form>

      <h2 className="text-center mb-4">Your reports</h2>
      <p className="text-center mb-8">
        Track and manage the issues you've reported below.
      </p>

      <div className="w-3/5 mx-auto">
        {JSON.parse(localStorage.getItem("reports") || "[]").map(
          (report: any, index: number) => (
            <ReportsCard key={index} item={report} />
          )
        )}
      </div>
    </main>
  );
};

export default SendAReportPage;
