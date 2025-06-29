import Footer from "../Components/Footer";
import ReportsCard from "../Components/reportsCard";
import Navbar from "../ui/navbar";
import { reports } from "@/dummyData";
const Reports = () => {
  return (
    <main>
      <Navbar />
      <h1 className="mb-4 text-center">{reports.length} New Reports</h1>
      <p className="text-center py-1">What are people speaking about right now?.</p>

      {reports.map((item, idx) => (
        <ReportsCard key={idx} item={item} />
      ))}

      <Footer />
    </main>
  );
};

export default Reports;
