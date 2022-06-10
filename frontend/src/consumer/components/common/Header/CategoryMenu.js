import React, {useState, useEffect} from 'react';
import CategoryMenuItems from "./CategoryMenuItems";

const CategoryMenu = () => {

    const [openMenu, setOpenMenu] = useState(false);
    useEffect(() => {
        const handler = (event) => {
            setOpenMenu(false);
        };

        const categoryMenu = document.querySelector('.category-menu');
        categoryMenu.addEventListener("blur", handler);
        return () => {
            categoryMenu.removeEventListener("blur", handler);
        };
    }, [openMenu]);

    return (
        <div className="col-xl-3">
            <div className="category-menu d-none d-xl-block h-100" tabIndex={0}>
                <div className="toggle-sidebar" onClick={() => setOpenMenu(!openMenu)}>
                    <i className="fa fa-bars sidebar-bar" />
                    <h5 className="mb-0">shop by category</h5>
                </div>
            </div>
            <div className="sidenav fixed-sidebar marketplace-sidebar" style={{display: openMenu ? "block" : "none"}}>
                <nav>
                    <div>
                        <div className="sidebar-back text-start d-xl-none d-block"><i
                            className="fa fa-angle-left pe-2" aria-hidden="true" /> Back
                        </div>
                        <CategoryMenuItems />
                    </div>
                </nav>
            </div>
        </div>
    )
}
export default CategoryMenu;