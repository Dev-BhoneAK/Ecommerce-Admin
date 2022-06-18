import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {menuItems} from '../../utility/mockedMenus';
const SidebarNav = ({sidebar}) => {

    const [menuOpen, setMenuOpen] = useState([]);
    const handleOnClick = (event) => {
        const dataInfo = event.currentTarget.getAttribute('data-info');
        const mainMenuArray = menuItems.map(menuItem => menuItem.name);
        if(mainMenuArray.includes(dataInfo)){
            setMenuOpen([]);
            setMenuOpen(prevState => [...prevState, dataInfo]);
        }else{
            const newArrayState = menuOpen.filter((value) => mainMenuArray.includes(value));
            setMenuOpen(newArrayState.concat(dataInfo));
        }
    }

    const generateMenus = (menuItem) => {
        if (menuItem.submenu) {
            return (
                <li className={menuOpen.includes(menuItem.name) ? 'active' : undefined}>
                    <a className={`sidebar-header ${menuOpen.includes(menuItem.name) && 'active'}`} href="#!" onClick={handleOnClick} data-info={menuItem.name}>
                        <i className={`fa ${menuItem.icon}`} />
                        <span>{menuItem.name}</span>
                        <i className="fa fa-angle-right pull-right"></i>
                    </a>

                    <ul className={`sidebar-submenu ${menuOpen.includes(menuItem.name) && 'menu-open'}`}>
                        {menuItem.submenu.map(submenuItem => (

                                <li className={menuOpen.includes(submenuItem.name) ? 'active' : undefined}>
                                    <Link to={`/admin${submenuItem.link ? submenuItem.link : '#'}`} className={menuOpen.includes(submenuItem.name) ? 'active' : undefined} onClick={handleOnClick} data-info={submenuItem.name}>
                                        <i className="fa fa-circle" />{submenuItem.name}
                                    </Link>
                                </li>
                        ))}
                    </ul>
                </li>
            )
        }else {
            return (
                <li>
                    <Link to={menuItem.link ? menuItem.link : '#'} className="sidebar-header" >
                        <i className={`fa ${menuItem.icon}`} />
                        <span>{menuItem.name}</span>
                    </Link>
                </li>
            );
        }
    }

    return (
            <div className={`page-sidebar ${!sidebar && 'open'}`}>
                <div className="main-header-left d-none d-lg-block">
                    <div className="logo-wrapper">
                        <a href="index.html">
                            <img className="d-none d-lg-block blur-up lazyloaded"
                                 src="/assets/images/dashboard/multikart-logo.png" alt="" />
                        </a>
                    </div>
                </div>
                <div className="sidebar custom-scrollbar">
                    <a href="#!" className="sidebar-back d-lg-none d-block">
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </a>
                    <div className="sidebar-user">
                        <img className="img-60" src="/assets/images/dashboard/man.jpeg" alt="#" />
                            <div>
                                <h6 className="f-14">JOHN</h6>
                                <p>general manager.</p>
                            </div>
                    </div>
                    <ul className="sidebar-menu">
                        {
                            menuItems.map(menuItem => generateMenus(menuItem))
                        }
                    </ul>
                </div>
            </div>
    )
}
export default SidebarNav;