import React from "react";
import {
  Menu,
  Container,
  Dropdown,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { createMedia } from "@artsy/fresnel"
import "./NavBar.css"


function MenuBar() {

/*const { MediaContextProvider, Media } = createMedia({
  // breakpoints values can be either strings or integers
  breakpoints: {
    sm: 0,
    md: 768,
    lg: 1024,
    xl: 1192,
  },
})*/
  
  return (
    <>
      {/*PC View */}
        <Menu >
        <div class="ui huge text right inverted menu" style={{ paddingRight: 30 }}>
            <a class="item " as={Link} to="/">
              About
            </a>
            <a class="item" as={Link} to="/">
              Tracks
            </a>
            <a class="item " as={Link} to="/">
              FAQ
            </a>
            <a class="item " as={Link} to="/">
              Sponsors
            </a>
            <div class="item">
            <div class="ui orange button">Apply</div>
            </div>
            </div>
        </Menu>


      {/*Mobile */}
      

      
      
    </>
  );
}

export default MenuBar;