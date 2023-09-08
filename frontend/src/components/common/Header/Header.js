import { useState } from "react";
import TopSection from "./TopSection";
import MainSection from "./MainSection";
import BottomSection from "./BottomSection";
import { ToggleNavContext } from "context/toggleNavContext";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <ToggleNavContext.Provider value={{ isNavOpen, setIsNavOpen }}>
      <header className="header-style-5 color-style">
        <div className="mobile-fix-option" />
        <TopSection />
        <MainSection />
        <BottomSection />
      </header>
    </ToggleNavContext.Provider>
  );
};
export default Header;
