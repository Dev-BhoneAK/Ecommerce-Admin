import React, {useState}from 'react';
import {menuItems} from 'utility/mockedcategories';
import CategorySubMenuItems from "./CategorySubMenuItems";

const CategoryMenuItems = () => {

    const [hover, setHover] = useState(null);

    const handleMouseEnter = (event) => {
        const dataInfo = event.currentTarget.getAttribute('data-info');
        menuItems[dataInfo].submenu && setHover(dataInfo);
    }

    return (
        <ul id="sub-menu" className="sm pixelstrap sm-vertical">
            {menuItems.map((menuItem, index) => (
                <li key={menuItem.name} className="hover-underline" onMouseEnter={handleMouseEnter} onMouseLeave={() => setHover(false)} data-info={index} >
                    <a href="#">
                        {menuItem.name} {menuItem.submenu && <span className="sub-arrow" />}
                    </a>
                    {menuItem.submenu && (
                        <ul style={{width: "auto", top: "auto", left: "0px", marginLeft: "318px", marginTop: "-40px", minWidth: "10em", maxWidth: "20em", display: hover == index ? "block" : "none"}}>
                            {menuItem.submenu.map((menuItem) => <CategorySubMenuItems name={menuItem.name} key={menuItem.name}/>)}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    )
}
export default CategoryMenuItems;