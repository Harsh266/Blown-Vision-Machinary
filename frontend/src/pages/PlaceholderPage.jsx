import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PlaceholderPage({ title, description }) {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-[60vh] bg-[#F8F9FA] flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#003429] mb-4">{title}</h1>
          <p className="text-[#404945] text-sm sm:text-base leading-relaxed mb-6">{description}</p>
          <p className="text-xs text-gray-400">This page is coming soon.</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
