import "./Menu.css";
import logo from "./icons/01.png";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu_container">
      <div className="logo">
        <Link to ="/Home">
        <img src={logo} alt=""></img>
        </Link>
      </div>

      <div className="menu_btn">
        <Link to ="/ProductList">
        <h1>SHOP</h1>
        </Link>
      </div>
      <div className="menu_btn">
        <h1>FABRIC</h1>
      </div>
      <div className="menu_btn">
        <h1>JOURNAL</h1>
      </div>
      <div className="menu_btn">
        <h1>ABOUT</h1>
      </div>

      <div className="login">
        <button>Login</button>
      </div>
    </div>
  );
}

export default Menu;
