import { useEffect, useState } from "react";
import { BellIcon, SearchIcon } from "@heroicons/react/solid";
import Link from "next/link";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        {/* <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        /> */}

        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">About</li>
          <li className="headerLink">Resume</li>
          <li className="headerLink">Works</li>
          <li className="headerLink">Contacts</li>
        </ul>
      </div>

      <div className="flex items-center space-x-4 text-sm font-light">
  
      </div>
    </header>
  );
}

export default Header;
