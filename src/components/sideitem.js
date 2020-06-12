import React from "react";

function SideItem(props) {
  return (
    <li className="side-item">
      <a href="#" className="nav-link">
        {props.icon}
        <span className="link-text">{props.name}</span>
      </a>
    </li>
  );
}

export default SideItem;
