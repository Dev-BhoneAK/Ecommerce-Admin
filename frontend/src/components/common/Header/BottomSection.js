import React, { useState } from "react";
import CategoryMenu from "./CategoryMenu";
import NavBar from "./NavBar";

const Bottom = () => {
  const [state, setState] = useState("");

  return (
    <div className="bottom-part">
      <div className="container">
        <div className="row">
          <CategoryMenu />
          <NavBar />
        </div>
      </div>
    </div>
  );
};
export default Bottom;
