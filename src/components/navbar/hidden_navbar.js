import React from "react";
import { ReactComponent as Home } from "../../icons/Home.svg";
import { ReactComponent as Trending } from "../../icons/Trending.svg";
import { ReactComponent as Users } from "../../icons/User.svg";
import { ReactComponent as Groups } from "../../icons/Groups.svg";
import { ReactComponent as Totoro } from "../../icons/totoro.svg";
import './nav.css';

const HiddenNavbar = () => {
  return (
    <nav className="hidden-navbar">
      <div className="hidden-navbar-mid">
        <ul className="hidden-navbar-nav">
          <li>
            <Home className="logo-nav" />
          </li>
          <li>
            <Trending className="logo-nav" />
          </li>
          <li>
            <Users className="logo-nav" />
          </li>
          <li>
            <Groups className="logo-nav" />
          </li>
          <li>
            <Totoro className="logo-nav" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HiddenNavbar;
