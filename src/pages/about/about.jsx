import aboutImage from "../../assets/about.png";
import "./about.scss";

export const About = () => {
  return (
    <div className="about_section">
      <div className="container">
        <div className="header">
          <h2>Why Megaclus</h2>
          <p>
            One stop shop for everything commerce, market gist and trends,
            events, business outlets etc. Social Media + Commerce
          </p>
        </div>

        <div className="wrapper">
          <div className="box_con">
            <div className="box">
              <div className="txt_box">
                <span>1</span>
                <h3>As a Business</h3>

                <div className="txt">
                  <p>
                    Link your Olivia Store, Shopify Stores etc to your social
                    media accounts seamlessly
                  </p>

                  <p>Never miss a social media Sell</p>

                  <p>One platform for social media and everything commerce</p>

                  <p>Create, mange and promote events</p>

                  <p>Monetize accounts</p>
                </div>
              </div>
            </div>

            <div className="box">
              <div className="txt_box">
                <span>2</span>
                <h3>As a User</h3>

                <div className="txt">
                  <p>Post, Chat, Comment and buy from one place</p>

                  <p>Detailed inventory and order</p>
                  <p>No ads</p>
                </div>
              </div>
            </div>
          </div>

          <div className="img">
            <img src={aboutImage} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};
