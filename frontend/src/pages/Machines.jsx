import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Cta from "../components/Cta";
import Footer from "../components/Footer";

const machines = [
  {
    title: "Monolayer Blown Film Extrusion Line",
    description: "Designed for high-performance production of single-layer films with unparalleled consistency and energy efficiency.",
    path: "/machines/monolayer",
    image: "https://cpimg.tistatic.com/08592631/b/4/Monolayer-Blown-Film-Extrusion-Line.jpg",
  },
  {
    title: "ABA Three Layer Blown Film Extrusion Line",
    description: "Advanced co-extrusion technology for producing high-quality three-layer films with superior barrier properties.",
    path: "/machines/aba",
    image: "https://www.polystarco.com/upload/catalog_m/Three%20Layer%20ABA%20Blown%20Film%20Machine__23L05BPZh4.png",
  },
  {
    title: "ABC Three Layer Blown Film Extrusion Line",
    description: "Triple-layer co-extrusion for diverse applications requiring multi-material film structures.",
    path: "/machines/abc",
    image: "https://www.plastar-machine.com/UserFiles/pd/abc-three-layer-co-extrusion_spic.jpg",
  },
];

export default function Machines() {
  return (
    <>
      <Navbar />
      <div className="w-full bg-[#F8F9FA] min-h-screen">
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#003429] mb-4">
                Our Machines
              </h1>
              <p className="text-[#404945] text-sm sm:text-base max-w-xl mx-auto">
                Precision-engineered blown film extrusion lines for every production need.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {machines.map((m) => (
                <Link
                  key={m.path}
                  to={m.path}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-full aspect-[4/3] overflow-hidden">
                    <img
                      src={m.image}
                      alt={m.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-lg font-bold text-[#003429] mb-2">{m.title}</h2>
                    <p className="text-sm text-[#404945] leading-relaxed">{m.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <Cta />
      </div>
      <Footer />
    </>
  );
}
