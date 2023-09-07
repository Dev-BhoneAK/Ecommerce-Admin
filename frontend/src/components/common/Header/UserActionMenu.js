import { useContext } from "react";
import { Link } from "react-router-dom";

import { ToggleNavContext } from "context/toggleNavContext";

const UserActionMenu = () => {
  const { isNavOpen, setIsNavOpen } = useContext(ToggleNavContext);

  return (
    <div className="menu-right pull-right">
      <nav className="text-start">
        <div
          className="toggle-nav"
          onClick={() => {
            console.log("isNav ", isNavOpen);
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
              {/* <img src="/assets/icons/heart.png" alt="" />{" "} */}
              <i class="ti-search" />
            </Link>
          </li>
          <li class="mobile-account">
            <Link to="/consumer-profile">
              {/* <img src="/assets/icons/user.png" alt="" /> */}
              <i class="ti-search" />
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
                <img
                  src="/assets/icons/user.png"
                  class="img-fluid blur-up lazyload"
                  alt=""
                />{" "}
                <i class="ti-search" />
              </div>
            </li>
            <li class="onhover-div mobile-setting">
              <div>
                <img
                  src="/assets/icons/setting.png"
                  class="img-fluid blur-up lazyload"
                  alt=""
                />{" "}
                <i class="ti-settings" />
              </div>
            </li>
            <li class="onhover-div mobile-cart">
              <div>
                <img
                  src="/assets/icons/cart.png"
                  class="img-fluid blur-up lazyload"
                  alt=""
                />{" "}
                <i class="ti-shopping-cart" />
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
