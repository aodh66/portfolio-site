// import '/src/app.css'
// import '/src/index.css'

const Header = (
  // props: object
  ) => {
    return (
      // <div className="headercontainer flex flex-col min-w-full w-full border-2 border-yellow-500 border-solid justify-items-center">
        <div className="headerlinks flex justify-between w-full border-2 border-b-gray-500 border-transparent p-4 mb-10">
          <a href={`/`} className="justify-self-start" >Aidan Meehan</a>
          <a href={`/`} className="hidden sm:block justify-self-center" >Logo</a>
          {/* <a href={`/`} class="justify-self-center" ><img src={Logo} class="logo" alt="aidan's logo" /></a> */}
          <div className="flex gap-4">
            <a href={`/blog`} className="justify-self-end" >Blog</a>
            <a href={`/contact`} className="justify-self-end" >Contact</a>
          </div>
        </div>
            );
            };
          {/* <hr style={{
    // color: 'blue',
    backgroundColor: 'red',
    height: "0.2em",
    width: "100%",
}} />
        <div className="headerline w-full h-1 bg-green-400">
          test
          </div> */}
      // </div>
  
  export default Header;