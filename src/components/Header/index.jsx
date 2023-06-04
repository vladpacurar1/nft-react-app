import AppLogo from "../../assets/nftlanding.png";
import "./style.css";

function Header() {
  return (
    <nav className="header">
      <div className="header_wrapper">
        <img className="header_logo" src={AppLogo} alt="app logo" />
        <span className="header_sign-up">Sign Up</span>
      </div>
    </nav>
  );
}

export default Header;
