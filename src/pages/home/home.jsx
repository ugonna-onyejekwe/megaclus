import { FaApple, FaGooglePlay } from "react-icons/fa";
import homeImage from "../../assets/home-img.png";
import "./home.scss";

export const Home = () => {
  return (
    <div className="home_page">
      <div className="container">
        <div className="txt_con">
          <h1>Social media for everything Commerce</h1>

          <p>
            Ever wondered what social media plus commerce would look like? Sign
            Up and find out
          </p>

          <div className="btns">
            <a href="/">
              <span>
                <FaGooglePlay />
              </span>
              <div className="txt">
                <small>Get it on</small>
                <h4>Google play</h4>
              </div>
            </a>

            <a href="/">
              <span>
                <FaApple />
              </span>
              <div className="txt">
                <small>Download on the</small>
                <h4>apple store</h4>
              </div>
            </a>
          </div>
        </div>

        <div className="img_con">
          <img src={homeImage} alt="image" />
        </div>
      </div>
    </div>
  );
};
