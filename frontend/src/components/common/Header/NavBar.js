import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ToggleNavContext } from "context/toggleNavContext";

const NavBar = () => {
  const { isNavOpen, setIsNavOpen } = useContext(ToggleNavContext);

  return (
    <div className="col-xxl-6 col-xl-9">
      <div className="main-nav-center">
        <nav className="text-start">
          <ul
            className="sm pixelstrap sm-horizontal"
            style={{ right: isNavOpen && "0" }}
          >
            <li>
              <div
                className="mobile-back text-end"
                onClick={() => setIsNavOpen(false)}
              >
                Back
                <i className="fa fa-angle-right ps-2" aria-hidden="true" />
              </div>
            </li>
            <li>
              <NavLink to="/" onClick={() => setIsNavOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/brands" onClick={() => setIsNavOpen(false)}>
                Brands
              </NavLink>
            </li>
            <li>
              <NavLink to="/collection" onClick={() => setIsNavOpen(false)}>
                Collection
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop" onClick={() => setIsNavOpen(false)}>
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="/blogs" onClick={() => setIsNavOpen(false)}>
                Blogs
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
