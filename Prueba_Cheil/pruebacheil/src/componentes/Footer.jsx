import "../styles/Footer.css";
import iconFacebook from "../assets/iconFacebook.png";
import iconTwitter from "../assets/iconTwitter.png";
import iconInstagram from "../assets/iconInstagram.png";
import iconTiktok from "../assets/iconTiktok.png";
import iconYoutube from "../assets/iconYoutube.png";
import iconSnapchat from "../assets/iconSnapchat.png";
import iconPinterest from "../assets/iconPinterest.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerContent">
        <div className="socialNetworks-Footer">
          <p className="titleSocialNetworks-Footer">FOLLOW</p>
          <div className="iconSocialNetworks-Footer">
            <a href="/">
              <img
                src={iconFacebook}
                className="iconFooter"
                alt="iconFacebook"
              />
            </a>

            <a href="/">
              <img src={iconTwitter} className="iconFooter" alt="iconTwitter" />
            </a>

            <a href="/">
              <img
                src={iconInstagram}
                className="iconFooter"
                alt="iconInstagram"
              />
            </a>

            <a href="/">
              <img src={iconTiktok} className="iconFooter" alt="iconTiktok" />
            </a>

            <a href="/">
              <img src={iconYoutube} className="iconFooter" alt="iconYoutube" />
            </a>

            <a href="/">
              <img
                src={iconSnapchat}
                className="iconFooter"
                alt="iconSnapchat"
              />
            </a>

            <a href="/">
              {" "}
              <img
                src={iconPinterest}
                className="iconFooter"
                alt="iconPinterest"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="footerLegal">
        <a href="/">Condiciones para el uso</a>

        <a href="/">Política de Privacidad</a>

        <a href="/">Anuncios basados en intereses</a>

        <a href="/">Acuerdo de licencia</a>
      </div>
    </div>
  );
}
