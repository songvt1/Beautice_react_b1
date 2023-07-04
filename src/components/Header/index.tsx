import "./header.css";
import MainLogo from "../../assets/img/MainLogo.png";
import Menu from "../../assets/img/menu.png";

import { useState } from "react";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const handleShow = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="site-header">
        <div className="main-logo">
          <img src={MainLogo} />
        </div>
        <nav className="nav">
          <ul>
            <li>
              <a>Home+</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Service</a>
            </li>
            <li>
              <a>Gallery</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
          </ul>
        </nav>
        <div className="contact-btn">Contact</div>
        <div className="menuLogo" onClick={handleShow}>
          <img src={Menu} />
        </div>
      </div>
      {showMenu && (
        <nav className="nav-menu">
          <ul>
            <li>
              <a onClick={handleShow}>Home+</a>
            </li>
            <li>
              <a onClick={handleShow}>About</a>
            </li>
            <li>
              <a onClick={handleShow}>Service</a>
            </li>
            <li>
              <a onClick={handleShow}>Gallery</a>
            </li>
            <li>
              <a onClick={handleShow}>Blog</a>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}

export default Header;
