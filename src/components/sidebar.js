import React from "react";

function Sidebar(props){
  return (
      <nav className = "sidebar">
          <ul className = "sidebar-nav">
              {props.children}
          </ul>
      </nav>
  );
}

export default Sidebar;