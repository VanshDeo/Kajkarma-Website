// components/Footer.tsx
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Footer section items
const Footer_Section_items = [
  {
    title: "Why Motion?",
    items: [
      "For Management",
      "For Creative Strategists",
      "For Media Buyers",
      "For Designers & Creatives",
      "Solutions",
    ],
  },
  {
    title: "Resources",
    items: [
      "Blog & Interviews",
      "Events",
      "Customers",
      "Make Ads That Convert",
      "How to Stop a Scroll in 3 seconds",
    ],
  },
  {
    title: "Explore",
    items: [
      "Enterprise",
      "Pricing",
      "Integrations",
      "Becoming a Partner",
      "Careers",
    ],
  },
  {
    title: "Connect",
    items: ["Twitter", "Linkedin", "Youtube", "Instagram"],
  },
];

// A reusable component for each section in the footer
const Footer_Section = ({ title, item }: { title: string; item: string[] }) => {
  return (
    <div>
      <h5 className="font-bold mb-3">{title}</h5>
      <ul>
        {item.map((name, index) => (
          <li
            key={index}
            className="text-sm hover:text-yellow-400 cursor-pointer mb-2"
          >
            <a key={index} className="block">
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Main Footer Component
const Footer = () => {
  return (
    <div className={`relative z-0 ${inter.className}`}>
      <footer className="bg-gray-900 text-white p-10 mt-12">
        <div
          className="absolute inset-0 z-0 backdrop-blur-md"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 204, 0, 0.2), rgba(0, 0, 0, 0.9))",
          }}
        ></div>

        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="mb-4 lg:mb-0">
            <Image
              className="w-50 h-auto mb-2"
              src="/kajkarma.svg"
              alt="Logo"
              width={100}
              height={100}
            />
          </div>
          
          {/* Rendering each section through mapping from the above stored Footer Section items data */}
          {Footer_Section_items.map((section, index) => {
              return (
                <Footer_Section
                  key={index}
                  title={section.title}
                  item={section.items}
                />
              );
            })}
        </div>

        <div className="relative z-10 w-full place-self-center mt-10 border-t border-gray-700 pt-4" />

            {/* Last line of the Footer Component */}
        <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row justify-center items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Motion Creative Cloud Inc.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="/privacy" className="hover:text-yellow-400 ml-5">
              Privacy
            </a>
            <a href="/terms" className="hover:text-yellow-400 ml-2">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
