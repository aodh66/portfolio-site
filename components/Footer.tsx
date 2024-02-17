import liLogo from "/src/assets/In-small-white.png";
import ghLogo from "/src/assets/github-mark-white.png";
import liLogoBig from "/src/assets/LinkedIn-med-white2.png";
import ghLogoBig from "/src/assets/GitHub_Logo_White.png";

interface propObject {
  isMobile: boolean;
};

const Footer = (props: propObject) => {
  return (
    <div className="footerlinks mb-10 mt-10 flex w-full justify-around border-2 border-transparent border-t-gray-500 p-4">
      <a
        href="https://www.linkedin.com/in/aidan-meehan-a1a4452a0/"
        className=""
        target="_blank"
      >
        {props.isMobile ? (
          <img src={liLogo} className="h-9" alt="LinkedIn logo" />
        ) : (
          <img src={liLogoBig} className="h-9" alt="LinkedIn logo" />
        )}
      </a>
      <a href="https://github.com/aodh66" className="" target="_blank">
        {props.isMobile ? (
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
