import { useState } from "react";
import logo from "../../assets/logo.png";
import "./navbar.scss";

export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  window.addEventListener("scroll", () => {
    window.scrollY > 10 && setIsActive(true);
    window.scrollY < 10 && setIsActive(false);
  });
  return (
    <nav className={isActive ? "active" : ""}>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="navigator">
          <button>download </button>
        </div>
      </div>
    </nav>
  );
};
