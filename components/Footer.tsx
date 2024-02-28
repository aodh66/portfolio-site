import { useState, useEffect } from "preact/hooks";

import liLogo from "/images/In-small-white.webp";
import ghLogo from "/images/github-mark-white.webp";
import liLogoBig from "/images/LinkedIn-med-white2.webp";
import ghLogoBig from "/images/GitHub_Logo_White.webp";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  //check screen size
  const handleResize = () => {
    if (window.innerWidth < 767) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // resize event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <div className="footerlinks mb-10 mt-10 flex w-full justify-around border-2 border-transparent border-t-gray-500 p-4">
      <a
        href="https://www.linkedin.com/in/aidan-meehan-a1a4452a0/"
        className=""
        target="_blank"
      >
        {isMobile ? (
          <img src={liLogo} className="h-9" alt="LinkedIn logo" />
        ) : (
          <img src={liLogoBig} className="h-9" alt="LinkedIn logo" />
        )}
      </a>
      <a href="https://github.com/aodh66" className="" target="_blank">
        {isMobile ? (
          <img src={ghLogo} className="h-9" alt="Github logo" />
        ) : (
          <div className="flex gap-1">
            <img src={ghLogoBig} className="h-9" alt="Github logo" />
            <img src={ghLogo} className="h-9" alt="Github logo" />
          </div>
        )}
      </a>
    </div>
  );
};

export default Footer;
