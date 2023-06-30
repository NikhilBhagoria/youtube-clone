import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-menu">
        <img src="/image/icons8-menu-50.png" alt="menu" srcset="" />
      </div>
      <div className="header-search">
        <input type="search" name="Search" id="" />
        <img src="./image/search-icon.png" alt="search_menu" />
      </div>
    </div>
  );
};

export default Header;
