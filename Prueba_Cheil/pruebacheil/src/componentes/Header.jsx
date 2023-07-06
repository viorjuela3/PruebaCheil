import { useState } from "react";
import "../styles/header.css";
import logo from "../assets/logo.png";
import iconLupa from "../assets/iconLupa.png";
import iconFacebook from "../assets/iconFacebook.png";
import iconTwitter from "../assets/iconTwitter.png";
import iconInstagram from "../assets/iconInstagram.png";
import iconTiktok from "../assets/iconTiktok.png";
import iconYoutube from "../assets/iconYoutube.png";
import iconSnapchat from "../assets/iconSnapchat.png";
import iconPinterest from "../assets/iconPinterest.png";


export default function Header() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div>
      <nav className="content-menu">
        <div className="containerMenuDown">
          <button onClick={toggleMenu} className="menuDesplegable">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="buttonMenu"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
          <div className={`containerMenu ${menu ? "isActive" : ""} `}>
            <div className="menuContent">
              <a href="/" className="optionMenu">
                HOME
              </a>
              <a href="/" className="optionMenu">
                RESERVATION
              </a>
              <a href="/" className="optionMenu">
                OFF
              </a>
              <a href="/" className="optionMenu">
                CONTACT
              </a>
            </div>

            <div className="socialNetworks">
              <div className="iconSocialNetworks">
                <a href="/">
                  <img src={iconFacebook} className="icon" alt="iconFacebook" />
                </a>

                <a href="/">
                  <img src={iconTwitter} className="icon" alt="iconTwitter" />
                </a>

                <a href="/">
                  <img
                    src={iconInstagram}
                    className="icon"
                    alt="iconInstagram"
                  />
                </a>

                <a href="/">
                  <img src={iconTiktok} className="icon" alt="iconTiktok" />
                </a>

                <a href="/">
                  <img src={iconYoutube} className="icon" alt="iconYoutube" />
                </a>

                <a href="/">
                  <img src={iconSnapchat} className="icon" alt="iconSnapchat" />
                </a>

                <a href="/">
                  {" "}
                  <img
                    src={iconPinterest}
                    className="icon"
                    alt="iconPinterest"
                  />
                </a>
              </div>
            </div>

          </div>
        </div>

        <div className="containerLogo">
          <a href="/" className="navLogo">
            <img src={logo} alt="Logo" />
          </a>
        </div>

        <div className="navSearch">
          <a href="/">
            <img src={iconLupa} alt="Icono lupa" />
          </a>
        </div>
      </nav>
    </div>
  );
}