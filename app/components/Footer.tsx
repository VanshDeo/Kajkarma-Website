// components/Footer.tsx
import { div } from "framer-motion/client";
import Image from "next/image";

const Footer = () => {
  // export interface FooterProps {

  // }

  const connect_items = [
    { name: "Twitter" },
    { name: "Linkedin" },
    { name: "Youtube" },
    { name: "Instagram" },
  ];

  const explore_items = [
    { name: "Enterprise" },
    { name: "Pricing" },
    { name: "Integrations" },
    { name: "Becoming a Partner" },
    { name: "Careers" },
  ];

  const resources_items = [
    { name: "Blog & Interviews" },
    { name: "Events" },
    { name: "Customers" },
    { name: "Make Ads That Convert" },
    { name: "How to Stop a Scroll in 3 seconds" },
  ];

  const first_items = [
    { name: "For Management" },
    { name: "For Creative Srategists" },
    { name: "For Media Buyers" },
    { name: "For Designers & Creatives" },
    { name: "Solutions" },
  ];

  return (
    <div className="relative z-0">
        
    <footer className="bg-gray-900 text-white p-10 mt-12">
    <div
    className="absolute inset-0 z-0 backdrop-blur-md"
    style={{
      background: 'radial-gradient(circle, rgba(255, 204, 0, 0.2), rgba(0, 0, 0, 0.9))',
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
        
        <div>

          <div>
            <h5 className="font-bold mb-3">Why Motion?</h5>
            <ul>
              {first_items.map((item, index) => (
                <li
                  key={index}
                  className={`text-sm hover:text-yellow-400 cursor-pointer mb-2`}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="">
          <div>
            <h5 className="font-bold mb-3">Resources</h5>
            <ul>
              {resources_items.map((item, index) => (
                <li
                  key={index}
                  className={`text-sm hover:text-yellow-400 cursor-pointer mb-3`}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="">
          <div>
            <h5 className="font-bold mb-3">Explore</h5>
            <ul>
              {explore_items.map((item, index) => (
                <li
                  key={index}
                  className={`text-sm hover:text-yellow-400 cursor-pointer mb-3`}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="">
          <div>
            <h5 className="font-bold mb-3">Connect</h5>
            <ul>
              {connect_items.map((item, index) => (
                <li
                  key={index}
                  className={`text-sm hover:text-yellow-400 cursor-pointer mb-3`}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        </div>

      <div className="relative z-10 w-full place-self-center mt-10 border-t border-gray-700 pt-4" />

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
