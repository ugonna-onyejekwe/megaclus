import downloadAppA from "../../assets/download-a.png";
import downloadAppG from "../../assets/download-g.png";
import phone1 from "../../assets/phone1.png";
import phone2 from "../../assets/phone2.png";
import imageBg from "../../assets/homeBg.png";
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
            <div className="img">
              <img src={downloadAppG} alt="get app on google" />
            </div>

            <div className="img">
              <img src={downloadAppA} alt="get app on apple" />
            </div>
          </div>
        </div>

        <div className="img_con">
          <div className="wrapper">
            <div className="img_bg">
              <img src={imageBg} alt="home_bg" />
            </div>

            <div className="img phone1">
              <img src={phone1} alt="phone image 1" />
            </div>
            <div className="img phone2">
              <img src={phone2} alt="phone image 2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
