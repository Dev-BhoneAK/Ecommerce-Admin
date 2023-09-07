import { Link } from "react-router-dom";

const MainLogo = () => {
  return (
    <div className="menu-left">
      <div className="brand-logo">
        <Link to="/">
          <img
            src="/assets/icons/logo.png"
            className="img-fluid lazyload"
            alt="Website Logo"
          />
        </Link>
      </div>
    </div>
  );
};

export default MainLogo;
