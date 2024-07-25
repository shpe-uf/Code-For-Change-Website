import React from "react";
import {
  Container,
  Card,
} from "semantic-ui-react";
// Import Swiper React components


import C4Clogo from "./media/C4C.png"
import "./CodeforChange.css"


function CodeForChange( ){

   
    return(
        <><>
            <img className="logo" src={C4Clogo} alt="C4C-logo-and-date"></img>
        </><Container className="c4c-container">
                <div className="C4C-text">
                    <h2 className="c4c-title">
                        WHAT IS CODE FOR CHANGE?
                    </h2>
                    <p className="c4c-para">
                        Code for Change is SHPE UF’s annual 24-hour hackathon!
                        <br />The mission of this event is to empower students to foster <br />positive community change using creative software and <br />design solutions.
                        Through workshops and mentorship, teams <br />will work to create projects that can contribute to the<br />betterment of society.
                    </p>

                </div>
            </Container></>
    )
}
export default CodeForChange;