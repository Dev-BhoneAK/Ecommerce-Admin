import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const handleColor = ({ isActive }) => {
    return { color: isActive && "red" };
  };
  return (
    <div className="col-xxl-6 col-xl-9">
      <div className="main-nav-center">
        <nav className="text-start">
          <ul className="sm pixelstrap">
            <li>
              <div className="mobile-back text-end">
                Back
                <i className="fa fa-angle-right ps-2" aria-hidden="true" />
              </div>
            </li>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/brands">Brands</NavLink>
            </li>
            <li>
              <NavLink to="/collection">Collection</NavLink>
            </li>
            <li>
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
