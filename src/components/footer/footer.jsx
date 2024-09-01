import "./footer.scss";

import logo from "../../assets/logo2.png";

import { MdEmail, MdLocalPhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineYoutube } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="box">
          <div className="logo">
            <img src={logo} alt="image" />
          </div>

          <p>Social media for everything commerce</p>
        </div>

        <div className="box">
          <h3>contact us</h3>

          <div className="txt_con">
            <div className="txt">
              <span>
                <IoLocationOutline />
              </span>
              <p>
                {" "}
                800 N King Street Suite 304 2236 Wilmington, DE 19801 United
                States
              </p>
            </div>

            <div className="txt">
              <span>
                <MdEmail />
              </span>
              <p> info@gbikna.com</p>
            </div>

            <div className="txt">
              <span>
                <MdLocalPhone />
              </span>
              <p>+1-754-254-2430, +234-902-147-4294</p>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>&copy; 2024. Megaclus. All rights reserved</p>
      </div>
    </footer>
  );
};
