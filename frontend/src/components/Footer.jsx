import { Link } from "react-router-dom";
import { Share2, Globe, Mail, Phone, MapPin, Clock } from "lucide-react";

const quickLinks = [
  { label: "Solutions",              href: "/solutions"              },
  { label: "Machine Specifications", href: "/machines"               },
  { label: "Industry Standards",     href: "/industry-standards"     },
  { label: "Global Network",         href: "/global-network"         },
];

const companyLinks = [
  { label: "About Us",      href: "/about"          },
  { label: "Careers",       href: "/careers"        },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

const contactItems = [
  { icon: Phone,  text: "+1 (800) KONARK-PS"                    },
  { icon: MapPin, text: "12 Precision Way, Tech Industrial Park" },
  { icon: Clock,  text: "24/7 Global Engineering Support"        },
];

const socialIcons = [
  { icon: Share2, href: "#", label: "Share"   },
  { icon: Globe,  href: "#", label: "Website" },
  { icon: Mail,   href: "#", label: "Email"   },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#F3F4F5] border-t border-gray-200 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          <div className="flex flex-col gap-5">
            <Link to="/" className="text-[#0f4c35] text-xl font-bold no-underline tracking-tight">
              Konark
            </Link>
            <p className="text-[#555] text-sm leading-relaxed max-w-xs">
              Defining the future of precision industrial systems through tectonic shifts in engineering and automation.
            </p>
            <div className="flex items-center gap-3 mt-1">
              {socialIcons.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-[#555] hover:border-[#0f4c35] hover:text-[#0f4c35] transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-[#0f4c35] text-sm font-bold tracking-wide">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    to={href}
                    className="text-sm text-[#555] no-underline hover:text-[#0f4c35] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-[#0f4c35] text-sm font-bold tracking-wide">Company</h3>
            <ul className="flex flex-col gap-3">
              {companyLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    to={href}
                    className="text-sm text-[#555] no-underline hover:text-[#0f4c35] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-[#0f4c35] text-sm font-bold tracking-wide">Contact Support</h3>
            <ul className="flex flex-col gap-3.5">
              {contactItems.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-2.5 text-sm text-[#555]">
                  <Icon size={15} className="text-[#0f4c35] mt-0.5 shrink-0" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#888]">
            © 2026 Konark Industrial Systems. Precision Tectonics.
          </p>
          <div className="flex items-center gap-5">
            <Link to="/privacy-policy" className="text-xs text-[#555] no-underline hover:text-[#0f4c35] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-[#555] no-underline hover:text-[#0f4c35] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}