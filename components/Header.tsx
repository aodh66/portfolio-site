const Header = () =>  {
    return (
      <div className="headerlinks mb-10 flex w-full justify-between border-2 border-transparent border-b-gray-500 p-4">
        <a href={`/`} className="justify-self-start link">
          Aidan Meehan
        </a>
        <a href={`/`} className="hidden justify-self-center sm:block">
          Logo
        </a>
        {/* <a href={`/`} class="justify-self-center" ><img src={Logo} class="logo" alt="aidan's logo" /></a> */}
        <div className="flex gap-4">
          <a href={`/blog`} className="justify-self-end link">
            Blog
          </a>
          <a href={`/contact`} className="justify-self-end link">
            Contact
          </a>
        </div>
      </div>
    );
  };

export default Header;