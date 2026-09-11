import { useEffect, useState, useRef } from "react";
import heroo from "../../public/heroo.png";
import Navbar from "../components/Navbar";
import about1 from "../../public/about1.png";
import about2 from "../../public/about2.png";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import {
  Eye,
  Target,
  Compass,
  Cog,
  Activity,
  Headphones,
  CheckCircle,
} from "lucide-react";

const SECTION_PX = "px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20";

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
}

export default function About() {
  const [visible, setVisible] = useState(false);

  const [visionRef, visionInView]     = useInView(0.1);
  const [processRef, processInView]   = useInView(0.1);
  const [block1Ref, block1InView]     = useInView(0.1);
  const [block2Ref, block2InView]     = useInView(0.1);
  const [whyRef, whyInView]           = useInView(0.1);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const steps = [
    { icon: Compass,      title: "Conceptual Design",    description: "Custom engineering frameworks tailored to specific polymer dynamics." },
    { icon: Cog,          title: "Precision Fabrication", description: "Advanced CNC machining and proprietary metallurgical hardening." },
    { icon: Activity,     title: "Rigorous Testing",      description: "Extensive multi-material trial runs and rigorous operational testing to ensure flawless performance." },
    { icon: Headphones,   title: "Dedicated After-Sales Support", description: "Prompt technical assistance, installation, and ongoing maintenance to guarantee maximum uptime." },
  ];

  const cards = [
    {
      title: "Modular & Upgradable Design",
      description: "Upgrade key components like die heads, air rings, or automatic winders as your customer demand grows — no need to buy an entirely new line.",
    },
    {
      title: "In-House Precision & Control",
      description: "Powered by our fully equipped 5,000 sq. ft. workshop featuring CNC VMCs and Lathes, our skilled team of 25+ members maintains strict end-to-end quality control on every component.",
    },
    {
      title: "Unmatched Reliability & Partnership",
      description: "Our machines are engineered for long-term performance, backed by continuous technical support to ensure your operation stays profitable and ahead of the competition.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen bg-[#F8F9FA] overflow-hidden">

        <section className={`w-full min-h-[calc(100vh-80px)] flex items-center ${SECTION_PX} py-10`}>
          <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-10">

            <div className={`w-full lg:w-[50%] flex flex-col transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <span className="w-fit text-[10px] sm:text-[11px] font-semibold tracking-[0.12em] uppercase px-3 py-1.5 rounded-md bg-[#CEE8DD] text-[#526961] mb-6 sm:mb-8">
                ABOUT US
              </span>
              <div className="mb-6 sm:mb-8">
                <h1 className="text-[34px] sm:text-[48px] md:text-[58px] lg:text-[64px] font-extrabold text-[#003429] leading-[1.05]">Precision</h1>
                <h1 className="text-[34px] sm:text-[48px] md:text-[58px] lg:text-[64px] font-extrabold text-[#7EBDA8] leading-[1.05]">Tectonics</h1>
                <h1 className="text-[34px] sm:text-[48px] md:text-[58px] lg:text-[64px] font-extrabold text-[#003429] leading-[1.05]">Engineered.</h1>
              </div>
              <p className="text-[14px] sm:text-[15px] text-[#404945] leading-[1.8] max-w-[500px] mb-8 sm:mb-12">
                At BLOWN VISION MACHINERY, we represent the next generation of blown film extrusion technology. As an ambitious and fast-growing manufacturer, we bridge the gap between cutting-edge engineering and customer-focused innovation — delivering high-performance machines built without compromise. We don't just manufacture equipment; we provide reliable, future-ready production solutions that ensure consistent output and maximum long-term value for modern manufacturers.
              </p>
            </div>

            <div className={`w-full lg:w-[50%] flex justify-center lg:justify-end transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
              <div className="relative w-full max-w-[520px]">
                <div className="rounded-2xl overflow-hidden w-full">
                  <img src={heroo} alt="" className="w-full h-[240px] sm:h-[360px] md:h-[450px] lg:h-[520px] object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section ref={visionRef} className={`flex items-center justify-center py-16 ${SECTION_PX}`}>
          <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-4">

            <div className={`relative bg-[#003429] rounded-2xl p-8 sm:p-10 flex flex-col justify-between min-h-[300px] sm:min-h-[340px] overflow-hidden md:col-span-3 transition-all duration-700 ${visionInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
              <div className="absolute top-8 right-8 opacity-20">
                <Eye className="w-12 h-12 text-white" strokeWidth={1.2} />
              </div>
              <div className="mt-auto flex flex-col gap-3">
                <p className="text-[#7EA89E] text-xs font-semibold tracking-[0.18em] uppercase select-none">The Vision</p>
                <h2 className="text-white text-2xl sm:text-3xl font-semibold leading-tight">
                  To be the primary benchmark for high-performance plastic extrusion solutions globally.
                </h2>
                <p className="text-white/70 text-sm leading-relaxed mt-2">
                  Our goal is to pioneer smart, state-of-the-art machinery that sets new benchmarks in accuracy and productivity. We aim to reshape the flexible packaging landscape by continuously integrating cutting-edge technology into every system we build.
                </p>
              </div>
            </div>

            <div className={`relative bg-white rounded-2xl p-8 sm:p-10 flex flex-col justify-between min-h-[300px] sm:min-h-[340px] md:col-span-2 transition-all duration-700 delay-150 ${visionInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
              <div>
                <Target className="w-9 h-9 text-[#1E5E50]" strokeWidth={1.8} />
              </div>
              <div className="mt-auto">
                <p className="text-[#555] text-xs font-semibold tracking-[0.18em] uppercase mb-4 select-none">The Mission</p>
                <h2 className="text-[#0D1C1A] text-2xl sm:text-3xl font-semibold leading-tight">
                  To redefine industrial efficiency through uncompromising technical precision.
                </h2>
                <p className="text-[#555] text-sm leading-relaxed mt-3">
                  We engineer robust, reliable, and energy-efficient blown film lines tailored to the evolving demands of modern manufacturing. Every component we craft is designed to deliver superior material consistency, maximum ROI, and long-lasting operational reliability.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section ref={processRef} className={`py-16 sm:py-20 ${SECTION_PX}`}>
          <div className={`text-center mb-14 sm:mb-20 transition-all duration-700 ${processInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D2E2A]">The Engineering Process</h2>
            <div className="mx-auto mt-4 w-16 h-[3px] bg-[#0D2E2A] rounded-full" />
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="hidden md:flex items-start justify-between">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isLast = index === steps.length - 1;
                return (
                  <div key={index} className="flex items-start flex-1">
                    <div
                      className={`flex flex-col items-center text-center flex-1 transition-all duration-700 ${processInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                      style={{ transitionDelay: `${index * 120}ms` }}
                    >
                      <div className="w-[68px] h-[68px] rounded-full bg-[#DDE1DD] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-[22px] h-[22px] text-[#0D2E2A]" strokeWidth={1.5} />
                      </div>
                      <div className="mt-6 px-4">
                        <h3 className="text-[#0D2E2A] text-[17px] font-bold mb-2 leading-snug">{step.title}</h3>
                        <p className="text-[#4B5550] text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                    {!isLast && <div className="h-[1.5px] bg-[#C0C5C0] flex-shrink-0 w-8 mt-[34px]" />}
                  </div>
                );
              })}
            </div>

            <div className="md:hidden flex flex-col gap-10">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div
                    key={i}
                    className={`flex flex-col items-center text-center gap-4 transition-all duration-700 ${processInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <div className="w-[64px] h-[64px] rounded-full bg-[#E7E8E9] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#003429]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-[#191C1D] text-[17px] font-bold mb-1">{step.title}</h3>
                      <p className="text-[#404945] text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section ref={block1Ref} className={`${SECTION_PX} pt-12 md:pt-16`}>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
              <div className={`rounded-2xl overflow-hidden transition-all duration-700 ${block1InView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
                <img src={about2} alt="Advanced Manufacturing Facility" className="w-full h-[260px] sm:h-[320px] md:h-full object-cover" />
              </div>
              <div className={`space-y-5 md:space-y-6 transition-all duration-700 delay-150 ${block1InView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#003429] leading-tight">Advanced Manufacturing Facilities</h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Our fully equipped 5,000 sq. ft. workshop features CNC VMCs and Lathes, enabling us to maintain strict end-to-end quality control on every component.
                </p>
                <ul className="space-y-3">
                  {["ISO 9001:2015 Certified Operations", "Climate-controlled precision measuring rooms", "Dedicated R&D prototyping laboratory"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                      <CheckCircle className="w-5 h-5 text-[#2E7D5E] flex-shrink-0 mt-[2px]" strokeWidth={1.8} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section ref={block2Ref} className={`${SECTION_PX} pt-16 md:pt-20 pb-12 md:pb-16`}>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
              <div className={`space-y-6 order-2 md:order-1 transition-all duration-700 ${block2InView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#003429] leading-tight">Quality Assurance & Team</h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Our workforce is composed of veteran engineers and technical artisans who treat every machine as a masterpiece of functional art.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "25+ Skilled Members",  desc: "Expert engineers across mechanical, electrical, and software disciplines." },
                    { title: "Zero-Tolerance QA",     desc: "Every component undergoes ultrasonic and thermal imaging tests." },
                  ].map((card, i) => (
                    <div key={i} className="bg-[#EDEEEF] rounded-xl p-5 space-y-2">
                      <h4 className="text-black text-sm font-bold">{card.title}</h4>
                      <p className="text-black text-xs leading-relaxed">{card.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`rounded-2xl overflow-hidden order-1 md:order-2 transition-all duration-700 delay-150 ${block2InView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
                <img src={about1} alt="Quality Assurance Team" className="w-full h-[260px] sm:h-[320px] md:h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section ref={whyRef} className={`py-16 sm:py-20 ${SECTION_PX}`}>
          <div className="max-w-6xl mx-auto">
            <div className={`mb-12 sm:mb-14 transition-all duration-700 ${whyInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D2E2A] mb-3">Why Choose Us</h2>
              <p className="text-[#4A5450] text-base">Building more than machines — we build the foundations of your production success.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cards.map((card, i) => (
                <div
                  key={i}
                  className={`border-l-[3px] border-[#0D2E2A] pl-6 py-6 transition-all duration-700 ${whyInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <h3 className="text-[#0D2E2A] text-xl font-bold mb-4">{card.title}</h3>
                  <p className="text-[#4A5450] text-sm leading-relaxed font-medium">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Cta />
        <Footer />
      </div>
    </>
  );
}
