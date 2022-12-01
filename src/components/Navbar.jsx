import React from "react";
import Searchbox from "./Searchbox";
function Navbar() {
  return (
    <div className="Navbar">
      <div className="left">
        <h1> Mustee</h1>
      </div>
      <div><Searchbox/></div>
    </div>
  );
}

export default Navbar;
