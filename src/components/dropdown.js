import React from 'react';
import { ReactComponent as CogIcon } from '../icons/cog.svg';
import { ReactComponent as ChevronIcon } from '../icons/chevron.svg'

function DropDownMenu(){

    function DropDownItem(props){
        return (
            <a href="#" className="menu-item">
            <span className="icon-button">{props.leftIcon}</span>
            {props.children}
            <span className="icon-right">{props.rightIcon}</span>
          </a>
        );
    }
    return (
        <div className = "dropdown">
           <DropDownItem> My Profile</DropDownItem>
           <DropDownItem
           leftIcon = {<CogIcon />}
           rightIcon = {<ChevronIcon/>}>
               Settings
           </DropDownItem>
        </div>
    );
}

export default DropDownMenu;