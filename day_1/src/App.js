function Nav() {
  return (
    <>
      
      <ul className="top--nav d-flex justify-content-between bg-dark ">
        <li className="fs-4 text-light li">
          <img src="logo192.png" alt="logo" className="nav--img" /> 
          <span>React facts</span>
        </li>
        <li className="fs-4 text-light li">
          <span>React Course - project 1</span>
        </li>
      </ul>

    </>
  );
}
function Body(){
  return(
    <>
      <div className="main--div ">
        <img src="logo512.png" alt="logo" className="body--img" /> 
        <div className="facts">
          <h1>Fun Facts About React</h1>
          <ul>
            <li>Was first release in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousand of enterprises apps including mobile apps</li>
          </ul>
        </div>
        
      </div>
      
    </>
  )
}
export {Nav, Body};

