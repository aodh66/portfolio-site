const Header = (
    // props: object
) =>  {
    return (
      // <div className="headercontainer flex flex-col min-w-full w-full border-2 border-yellow-500 border-solid justify-items-center">
      <div className="headerlinks mb-10 flex w-full justify-between border-2 border-transparent border-b-gray-500 p-4">
        <a href={`/`} className="justify-self-start">
          Aidan Meehan
        </a>
        <a href={`/`} className="hidden justify-self-center sm:block">
          Logo
        </a>
        {/* <a href={`/`} class="justify-self-center" ><img src={Logo} class="logo" alt="aidan's logo" /></a> */}
        <div className="flex gap-4">
          <a href={`/blog`} className="justify-self-end">
            Blog
          </a>
          <a href={`/contact`} className="justify-self-end">
            Contact
          </a>
        </div>
      </div>
    );
  };

export default Header;

{
  /* <hr style={{
    // color: 'blue',
    backgroundColor: 'red',
    height: "0.2em",
    width: "100%",
}} />
        <div className="headerline w-full h-1 bg-green-400">
          test
          </div> */
}
// </div>
