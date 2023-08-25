import "./FooterStyles.css";
import { FaInstagram } from "react-icons/fa";

export default function App() {
  return (
    <div>
      <footer className="bg-footer relative-footer flex-footer">
        <div className="flex-footer container-footer relative-footer">
          <img
            className="star-mobile-footer star-mobile2-footer absolute-footer"
            src="https://cdn.discordapp.com/attachments/1135510437790765076/1142438349903253514/image.png"
          />
          <img
            className="logo-footer"
            src="https://cdn.discordapp.com/attachments/1135510437790765076/1137004841609216093/LOGO_ALIVE_9.png"
            alt=""
          />
          <div className="relative-footer flex-footer content-footer">
            <span className="register-now-footer relative-footer">
              <img
                className="logo-mobile-footer"
                src="https://cdn.discordapp.com/attachments/1135510437790765076/1137004841609216093/LOGO_ALIVE_9.png"
                alt=""
              />
              <img
                className="absolute-footer star-footer"
                src="https://cdn.discordapp.com/attachments/1135510437790765076/1142438349903253514/image.png"
              />
              <div className="registerNow">
                <span>REGISTER</span>
                <br />
                <span>NOW !</span>
              </div>
            </span>
            <hr />
            <div className="contact-footer">
              <div>Contact Us</div>
                <a href="https://www.instagram.com/alivemedic.umn/" target="_blank" className="instagram"><FaInstagram /> alivemedic.umn</a>
            </div>
          </div>
        </div>
        <div className="sponsor-section"></div>
        <img
          className="wave-footer absolute-footer"
          src="https://cdn.discordapp.com/attachments/1135510437790765076/1142437616516616323/image.png"
        />
        <img
          className="wave-mobile-footer absolute-footer"
          src="https://cdn.discordapp.com/attachments/1135510437790765076/1142441694940385310/image.png"
        />
      </footer>
    </div>
  );
}
