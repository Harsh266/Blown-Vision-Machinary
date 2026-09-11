import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-[60vh] bg-[#F8F9FA] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-6xl sm:text-7xl font-extrabold text-[#003429] mb-4">404</h1>
          <p className="text-[#404945] text-lg mb-8">The page you're looking for doesn't exist.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#004D3D] text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-emerald-700 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
