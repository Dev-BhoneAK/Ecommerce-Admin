import React from 'react';
import Top from './Top';
import Main from './Main';
import Bottom from "./Bottom";
import CategoryMenu from "./CategoryMenu";
import Search from "./Search";

const Header = () => {

    const handleSearch = (e) => {
        e.preventDefault();
    }
    return (
        <header className="header-style-5 color-style">
            <Top />
            <Main />
            <Bottom />
        </header>
    );
}
export default Header;