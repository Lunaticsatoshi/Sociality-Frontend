import React from "react";
import { Link } from "react-router-dom";
import NavItem from "./navitem";
import DropDownMenu from "./dropdown";
import { ReactComponent as Icon } from "../../icons/facebook.svg";
import { ReactComponent as BellIcon } from "../../icons/bell.svg";
// import { ReactComponent as Messenger } from "../../icons/messenger.svg";
import { ReactComponent as CaretIcon } from "../../icons/caret.svg";
import { ReactComponent as PlusIcon } from "../../icons/plus.svg";
import { ReactComponent as Home } from "../../icons/Home.svg";
import { ReactComponent as Trending } from "../../icons/Trending.svg";
import { ReactComponent as Users } from "../../icons/User.svg";
import { ReactComponent as Groups } from "../../icons/Groups.svg";
import { ReactComponent as Totoro } from "../../icons/totoro.svg";
import { ReactComponent as ArrowIcon } from "../../icons/arrow.svg";
import { ReactComponent as BoltIcon } from "../../icons/bolt.svg";

import Button from "../../util/Button";

//Material UI Icons
import HomeIcon from "@material-ui/icons/Home";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import WorkIcon from "@material-ui/icons/Work";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";

function Navbar() {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <div className="nav-brand">
          <Icon className="logo" />
        </div>
        <div className="navbar-mid">
          <ul className="navbar-navmid">
            <Button tip="Home">
              <li className="logo-nav">
                <Link to="/">
                  <HomeIcon fontSize="large" />
                </Link>
              </li>
            </Button>
            <Button tip="Trending">
              <li className="logo-nav">
                <TrendingUpIcon color="primary" fontSize="large" />
              </li>
            </Button>
            <Button tip="work">
              <li className="logo-nav">
                <WorkIcon color="primary" fontSize="large" />
              </li>
            </Button>
            <Button tip="People">
              <li className="logo-nav">
                <PeopleAltIcon color="primary" fontSize="large" />
              </li>
            </Button>
            <Button tip="totoro">
              <li className="logo-nav">
                <Totoro color="primary" />
              </li>
            </Button>
          </ul>
        </div>
        <div className="nav-links">
          <ul className="navbar-nav">
            <Button tip="Create" btnClassName="nav__btn">
              <li>
                <NavItem icon={<PlusIcon />}></NavItem>
              </li>
            </Button>
            <Button tip="Notifications" btnClassName="nav__btn">
              <li>
                <NavItem icon={<BellIcon />}></NavItem>
              </li>
            </Button>
            <Button btnClassName="nav__btn">
              <li>
                <NavItem icon={<CaretIcon />}>
                  <DropDownMenu />
                </NavItem>
              </li>
            </Button>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
