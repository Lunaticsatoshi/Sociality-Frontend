import React from "react";
import NavItem from "./navitem";
import DropDownMenu from "./dropdown";
import { ReactComponent as Icon } from "../../icons/facebook.svg";
import { ReactComponent as BellIcon } from "../../icons/bell.svg";
import { ReactComponent as Messenger } from "../../icons/messenger.svg";
import { ReactComponent as CaretIcon } from "../../icons/caret.svg";
import { ReactComponent as PlusIcon } from "../../icons/plus.svg";
import { ReactComponent as Home } from "../../icons/Home.svg";
import { ReactComponent as Trending } from "../../icons/Trending.svg";
import { ReactComponent as Users } from "../../icons/User.svg";
import { ReactComponent as Groups } from "../../icons/Groups.svg";
import { ReactComponent as Totoro } from "../../icons/totoro.svg";
import { ReactComponent as ArrowIcon } from "../../icons/arrow.svg";
import { ReactComponent as BoltIcon } from "../../icons/bolt.svg";
import "./nav.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Icon className="logo" />
      </div>
      <div className="navbar-mid">
        <ul className="navbar-navmid">
          <li>
          <Home className="logo-nav" />
          </li>
          <li>
          <Trending className="logo-nav" />
          </li>
          <li>
          <Users className="logo-nav"/>
          </li>
          <li>
          <Groups className="logo-nav"/>
          </li>
          <li>
          <Totoro className="logo-nav"/>
          </li>
        </ul>
      </div>
      <div className="nav-links">
        <ul className="navbar-nav">
          <li>
            <NavItem icon={<PlusIcon />}></NavItem>
          </li>
          <li>
            <NavItem icon={<BellIcon />}></NavItem>
          </li>
          <li>
            <NavItem icon={<Messenger />}></NavItem>
          </li>
          <li>
            <NavItem icon={<CaretIcon />}>
              <DropDownMenu />
            </NavItem>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
