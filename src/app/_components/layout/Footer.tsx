import {  EnquireButton } from "@/app/_components/ui/EnquireButon";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

// Used Real Links for Footer Sections and Social Media, you can replace them with actual links as needed.
const FOOTER_SECTIONS = [
  {
    title: "Accredian",
    links: [
      {
        label: "About",
        href: "https://accredian.com/About",
      },
      {
        label: "Blog",
        href: "https://blog.accredian.com/",
      },
      {
        label: "Why Accredian",
        href: "https://accredian.com/whyaccredian",
      },
    ],
  },
];
const SOCIAL_LINKS = [
  {
    icon: FaFacebook,
    href: "https://facebook.com/accredianlearn",
    label: "Facebook",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/company/accredianedu/",
    label: "LinkedIn",
  },
  {
    icon: FaTwitter,
    href: "https://twitter.com/accredianedu",
    label: "Twitter",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/accredian_edu",
    label: "Instagram",
  },
  {
    icon: FaYoutube,
    href: "https://www.youtube.com/channel/UCIDL_4ADPU2iyKnDJ0xRzyA",
    label: "YouTube",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white mt-12 ">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
     
        {/* FooterTop  */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-10 border-b border-gray-800/10">
        
          <div className="flex flex-col items-center md:items-start gap-6">
            <img
              src="https://c.animaapp.com/modxg1siwscZsb/assets/logo.webp"
              alt="Accredian Logo"
              className="w-32 md:w-40 object-contain"
            />

            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1"
                  aria-label={social.label}>
                  <social.icon
                    className="w-5 h-5 md:w-6 md:h-6"
                    strokeWidth={1.5}
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-3">
            <EnquireButton />
            <p className="text-gray-500 text-xs md:text-sm font-medium">
              Speak with our{" "}
              <span className="text-blue-600 cursor-pointer hover:underline">
                Advisor
              </span>
            </p>
          </div>
        </div>

        {/* FooterLinks  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 w-full py-10 border-b border-gray-800/10">
       
          {FOOTER_SECTIONS.map((section) => (
            <div
              key={section.title}
              className="flex flex-col gap-4">
              <h3 className="text-gray-900 text-lg font-semibold tracking-tight">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-base">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex flex-col gap-4">
            <h3 className="text-gray-900 text-lg font-semibold tracking-tight">
              Contact Us
            </h3>
            <div className="flex flex-col gap-3 text-base text-gray-600">
              <p>
                Email us:{" "}
                <a
                  href="mailto:enterprise@accredian.com"
                  className="text-blue-600 font-medium hover:underline">
                  enterprise@accredian.com
                </a>
              </p>
              <p className="max-w-xs leading-relaxed">
                <span className="font-semibold text-gray-900">
                  Office Address:
                </span>
                <br />
                4th Floor, 250, Phase IV, Udyog Vihar,
                Sector 18, Gurugram, Haryana
              </p>
            </div>
          </div>
        </div>

        {/* FooterCopyright  */}
        <div className="w-full  mt-8 pt-8 pb-10">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-gray-500 text-sm md:text-base font-medium">
              © {currentYear} Accredian A Brand of FullStack
              Education Pvt Ltd. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;