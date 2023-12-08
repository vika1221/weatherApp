// import weatherLogo from "Images/"
import weatherLogo from "./Images/weatherLogo.jpg";


const Header=()=> {
  return (
    <>
      <div className="header">
      <img className="logo" src={weatherLogo} alt="weather update"></img>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
        </ul>
      </div>
    </>
  )
}

export default Header;
