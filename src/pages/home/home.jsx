import downloadAppA from "../../assets/download-a.png";
import downloadAppG from "../../assets/download-g.png";
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
            <div className="img">
              <img src={downloadAppG} alt="get app on google" />
            </div>

            <div className="img">
              <img src={downloadAppA} alt="get app on apple" />
            </div>
          </div>
        </div>

        <div className="img_con">
          <img src={homeImage} alt="image" />
        </div>
      </div>
    </div>
  );
};
