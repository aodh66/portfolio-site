import '/src/app.css'
import '/src/index.css'

const Header = (props: object) => {
    return (
      <div className="headercontainer min-w-full w-full border-2 border-yellow-500 border-solid justify-items-center">
        <div className="headerlinks flex justify-between min-w-full w-full border-4 border-indigo-500/100 border-solid">
          <a href={`/`} className="justify-self-start" >Aidan Meehan</a>
          <a href={`/`} className="justify-self-center" >Logo</a>
          {/* <a href={`/`} class="justify-self-center" ><img src={Logo} class="logo" alt="aidan's logo" /></a> */}
          <a href={`/blog`} className="justify-self-end" >Blog</a>
          <a href={`/contact`} className="justify-self-end" >Contact</a>
        </div>
          <hr style={{
    // color: 'blue',
    backgroundColor: 'blue',
    height: "0.2em",
    width: "90%",
}} />
          <h1 className="text-3xl font-bold underline text-red-600 bg-green-400">
      Hello world! Test
    </h1>
        <div className="headerline w-4/5 h-px bg-indigo-400">
          test
          </div>
      </div>
    );
  };
  
  export default Header;