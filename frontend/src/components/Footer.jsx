import { Link } from "react-router-dom";
import { Share2, Globe, Mail, Phone, MapPin, Clock, Video, Camera, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const quickLinks = [
  { label: "Machines", href: "/machines" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Machines", href: "/machines" },
  { label: "Contact Us", href: "/contact" },
];

const contactItems = [
  { icon: Phone, text: "+91 22 2345 6789" },
  { icon: MapPin, text: "Andheri East, Mumbai 400093" },
  { icon: Clock, text: "Mon - Sat: 9:00 AM - 6:00 PM" },
];

const socialIcons = [
  { icon: Globe, href: "https://blownvision.com", label: "Website" },
  { icon: Mail, href: "mailto:support@blownvision.com", label: "Email" },
  { icon: Video, href: "https://youtube.com/@blownvision", label: "YouTube" },
  { icon: Camera, href: "https://instagram.com/blownvision", label: "Instagram" },
  { icon: MessageCircle, href: "https://wa.me/912223456789", label: "WhatsApp" },
];

/* Animation Variants */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Footer() {
  return (
    <footer className="w-full bg-[#F3F4F5] border-t border-gray-200 font-sans">

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14 sm:py-16"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Column 1 */}
          <motion.div variants={item} className="flex flex-col gap-5">
            <Link to="/" className="text-[#0f4c35] text-xl font-bold tracking-tight">
              Blown Vision Machinary
            </Link>

            <p className="text-[#555] text-sm leading-relaxed max-w-xs">
              Defining the future of precision industrial systems through tectonic shifts in engineering and automation.
            </p>

            <div className="flex items-center gap-3 mt-1">
              {socialIcons.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.15, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-[#555] hover:border-[#0f4c35] hover:text-[#0f4c35]"
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2 */}
          <motion.div variants={item} className="flex flex-col gap-4">
            <h3 className="text-[#0f4c35] text-sm font-bold tracking-wide">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map(({ label, href }) => (
                <motion.li key={label} whileHover={{ x: 5 }}>
                  <Link
                    to={href}
                    className="text-sm text-[#555] hover:text-[#0f4c35] transition"
                  >
                    {label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 */}
          <motion.div variants={item} className="flex flex-col gap-4">
            <h3 className="text-[#0f4c35] text-sm font-bold tracking-wide">Company</h3>
            <ul className="flex flex-col gap-3">
              {companyLinks.map(({ label, href }) => (
                <motion.li key={label} whileHover={{ x: 5 }}>
                  <Link
                    to={href}
                    className="text-sm text-[#555] hover:text-[#0f4c35] transition"
                  >
                    {label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4 */}
          <motion.div variants={item} className="flex flex-col gap-4">
            <h3 className="text-[#0f4c35] text-sm font-bold tracking-wide">Contact Support</h3>
            <ul className="flex flex-col gap-3.5">
              {contactItems.map(({ icon: Icon, text }) => (
                <motion.li
                  key={text}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-2.5 text-sm text-[#555]"
                >
                  <Icon size={15} className="text-[#0f4c35] mt-0.5" />
                  <span>{text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="border-t border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#888]">
            © 2026 Blown Vision Machinary. Precision Tectonics.
          </p>

          <div className="flex items-center gap-5">
            <Link to="/about" className="text-xs text-[#555] hover:text-[#0f4c35] transition">
              About Us
            </Link>
            <Link to="/contact" className="text-xs text-[#555] hover:text-[#0f4c35] transition">
              Contact
            </Link>
          </div>
        </div>
      </motion.div>

    </footer>
  );
}