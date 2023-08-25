import "./Footer.css";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <footer className="bg-footer relative-footer flex-footer">
        <div className="flex-footer container-footer relative-footer">
          <img
            className="star-mobile-footer star-mobile1-footer absolute-footer"
            src="https://cdn.discordapp.com/attachments/1135510437790765076/1137004841143636009/bintang.png"
            alt="star-mobile-footer"
          />
          <img
            className="star-mobile-footer star-mobile2-footer absolute-footer"
            src="https://cdn.discordapp.com/attachments/1135510437790765076/1137004841143636009/bintang.png"
            alt="star-mobile-footer"
          />
          <img
            className="logo-footer"
            src="https://cdn.discordapp.com/attachments/1135510437790765076/1137004841609216093/LOGO_ALIVE_9.png"
            alt="logo-footer"
          />
          <div className="relative-footer flex-footer content-footer">
            <span className="register-now-footer relative-footer">
              <img
                className="logo-mobile-footer"
                src="https://cdn.discordapp.com/attachments/1135510437790765076/1137004841609216093/LOGO_ALIVE_9.png"
                alt="logo-mobile-footer"
              />
              <img
                className="absolute-footer star-footer"
                src="https://cdn.discordapp.com/attachments/1135510437790765076/1137004841143636009/bintang.png"
                alt="star-footer"
              />
              <div className="registerNow">
                <span>REGISTER</span>
                <br />
                <span>NOW !</span>
              </div>
            </span>
            <hr />
            <div className="contact-footer">
              <div id="contact">Contact Us</div>
              <div className="instagram">
                <a href="https://www.instagram.com/alivemedic.umn/"><FaInstagram /> alivemedic.umn</a>
              </div>
            </div>
          </div>
        </div>
        <div className="sponsor-section"></div>
        <img
          className="wave-footer absolute-footer"
          src="https://cdn.discordapp.com/attachments/1135510437790765076/1137004841881833482/wave.png"
          alt="footer-wave"
        />
        <img
          className="wave-mobile-footer absolute-footer"
          src="https://cdn.discordapp.com/attachments/1135510437790765076/1137049610372792320/wave-mobile.png"
          alt="footer-wave"
        />
      </footer>
    </div>
  );
}
