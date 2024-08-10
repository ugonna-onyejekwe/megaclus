import "./footer.scss";
import youtube from "../../assets/yt-icon.png";
import twitter from "../../assets/Twitter-icon.png";
import facebook from "../../assets/fb-icon.png";
import ig from "../../assets/ig-icon.png";
import logo from "../../assets/logo2.png";
import email_icon from "../../assets/email-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="box">
          <div className="logo">
            <img src={logo} alt="image" />
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit
            amet neque tortor.
          </p>

          <div className="socails">
            <img src={youtube} alt="youtube icon" />
            <img src={twitter} alt="x icon" />
            <img src={ig} alt="ig icon" />
            <img src={facebook} alt="fb icon" />
          </div>
        </div>

        <div className="box">
          <h3>quick links</h3>
          <a href="#">about us</a>
          <a href="#">services</a>
          <a href="#">pricing</a>
          <a href="#">testimonial</a>
        </div>

        <div className="box">
          <h3>contact us</h3>

          <div className="txt_con">
            <div className="txt">
              <img src={email_icon} alt="email icon" />
              <p> ekomobong@gmail.com</p>
            </div>

            <div className="txt">
              <img src={location_icon} alt="loaction icon" />
              <p> Lagos, Nigeria</p>
            </div>

            <div className="txt">
              <img src={phone_icon} alt="phone icon" />
              <p> +234 8074839200</p>
            </div>
          </div>
        </div>

        <div className="box">
          <h3>newsletter</h3>

          <div className="input_con">
            <input type="email" />
            <button>subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
