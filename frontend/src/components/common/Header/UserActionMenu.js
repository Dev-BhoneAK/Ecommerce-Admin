import { useContext } from "react";
import { Link } from "react-router-dom";

import { ToggleNavContext } from "context/toggleNavContext";

const UserActionMenu = () => {
  const { setIsNavOpen } = useContext(ToggleNavContext);

  return (
    <div className="menu-right pull-right">
      <nav className="text-start">
        <div
          className="toggle-nav"
          onClick={() => {
            setIsNavOpen(true);
          }}
        >
          <i className="fa fa-bars sidebar-bar" />
        </div>
      </nav>
      <div class="top-header d-block">
        <ul class="header-dropdown">
          <li class="mobile-wishlist">
            <Link to="/wish-list">
              <i class="fa-solid fa-heart" />
            </Link>
          </li>
          <li class="mobile-account">
            <Link to="/consumer-profile">
              <i class="fa-solid fa-user" />
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <div class="icon-nav d-sm-block">
          {" "}
          {/* remove d-none currently */}
          <ul>
            <li class="onhover-div d-xl-none d-inline-block mobile-search">
              <div>
                <i class="fa-solid fa-magnifying-glass" />
              </div>
            </li>
            <li class="onhover-div mobile-setting">
              <div>
                <i class="fa-solid fa-gear" />
              </div>
            </li>
            <li class="onhover-div mobile-cart">
              <div>
                <i class="fa-solid fa-cart-shopping" />
              </div>
              <span class="cart_qty_cls">2</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default UserActionMenu;
