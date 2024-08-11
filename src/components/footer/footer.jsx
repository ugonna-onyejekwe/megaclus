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

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit
            amet neque tortor.
          </p>

          <div className="socials">
            <span>
              <AiOutlineYoutube />
            </span>

            <span>
              <FiTwitter />
            </span>

            <span>
              <FaInstagram />
            </span>

            <span>
              <LuFacebook />
            </span>
          </div>
        </div>

        <div className="box">
          <h3>quick links</h3>
          <div className="links">
            <a href="#">about us</a>
            <a href="#">services</a>
            <a href="#">pricing</a>
            <a href="#">testimonial</a>
          </div>
        </div>

        <div className="box">
          <h3>contact us</h3>

          <div className="txt_con">
            <div className="txt">
              <span>
                <MdEmail />
              </span>
              <p> ekomobong@gmail.com</p>
            </div>

            <div className="txt">
              <span>
                <IoLocationOutline />
              </span>
              <p> Lagos, Nigeria</p>
            </div>

            <div className="txt">
              <span>
                <MdLocalPhone />
              </span>
              <p> +234 8074839200</p>
            </div>
          </div>
        </div>

        <div className="box">
          <h3>newsletter</h3>

          <div className="input_con">
            <input type="email" placeholder="Enter your email" />
            <button>subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
