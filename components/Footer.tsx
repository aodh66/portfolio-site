import liLogo from "/src/assets/In-small-white.png";
import ghLogo from "/src/assets/github-mark-white.png";

const Footer = () =>
  // props: object
  {
    return (
      <div className="footerlinks mb-10 mt-10 flex w-full justify-around border-2 border-transparent border-t-gray-500 p-4">
        <a
          href="https://www.linkedin.com/in/aidan-meehan-a1a4452a0/"
          class="" target="_blank"
        >
          <img src={liLogo} class="w-9" alt="LinkedIn logo" />
        </a>
        <a href="https://github.com/aodh66" class="" target="_blank">
          <img src={ghLogo} class="w-9" alt="Github logo" />
        </a>
      </div>
    );
  };

export default Footer;
