import React from "react";
import "./App.css";
import "./components/navbar";
import "./components/navitem";
import "./components/dropdown";
import Navbar from "./components/navbar";
import NavItem from "./components/navitem";
import Sidebar from "./components/sidebar";
import SideItem from "./components/sideitem";
import { ReactComponent as BellIcon } from "./icons/bell.svg";
import { ReactComponent as Messenger } from "./icons/messenger.svg";
import { ReactComponent as CaretIcon } from "./icons/caret.svg";
import { ReactComponent as PlusIcon } from "./icons/plus.svg";
import { ReactComponent as ArrowIcon } from "./icons/arrow.svg";
import { ReactComponent as BoltIcon } from "./icons/bolt.svg";
import { ReactComponent as HomeIcon } from "./icons/home.svg";
import { ReactComponent as TrendingIcon } from "./icons/trending.svg";
import { ReactComponent as UserIcon } from "./icons/user.svg";
import { ReactComponent as GroupIcon } from "./icons/group.svg";
import { ReactComponent as ChillIcon } from "./icons/totoro.svg";
import DropDownMenu from "./components/dropdown";
import logo from "./images/Sociality.jpg";

function App() {
  return (
    <div className="App">
      <div class="container">
        <header className="Header">
          <img
            src={logo}
            alt="Sociality"
            className="logo"
            height="60"
            width="60"
          ></img>
          <Navbar>
            <NavItem icon={<PlusIcon />}></NavItem>
            <NavItem icon={<BellIcon />}></NavItem>
            <NavItem icon={<Messenger />}></NavItem>

            <NavItem icon={<CaretIcon />}>
              <DropDownMenu />
            </NavItem>
          </Navbar>
        </header>
      </div>
      <Sidebar>
        <SideItem icon={<HomeIcon />} name="Home"></SideItem>
        <SideItem icon={<TrendingIcon />} name="Trending"></SideItem>
        <SideItem icon={<UserIcon />} name="Users"></SideItem>
        <SideItem icon={<GroupIcon />} name="Groups"></SideItem>

        <SideItem icon={<ChillIcon />} name="Chill"></SideItem>
      </Sidebar>
    </div>
  );
}

export default App;
