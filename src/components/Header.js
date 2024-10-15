import { LOGO_URL } from "../utils/constants";

const Header=()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="search">
               <input
                    type="text"
                    className="search-bar"
                    placeholder="Search for restaurants or food..."
                />
            </div>
            <div className="nav-items">
                <ul>
                 <li>Home </li>
                 <li>About Us</li> 
                 <li>Contact</li> 
                 <li>Cart</li>           
                </ul>
            </div>
        </div>
    )
  }

  export default Header;