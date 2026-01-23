import React from "react";
import {Grid, GridRow, GridColumn, Image} from 'semantic-ui-react';
import PureButtons from "./media/PureButtons.png";
import BoFA from "./media/BoFA.png";
import FCI from "./media/FCI.jpeg";

import "./sponsors.css";


function Sponsors(){
   
    return(
        <>
        <div className="sponsors-container">
            <h1 className="sponsor-title">Thank you to our sponsors! </h1>
            { <Grid columns={3} centered>
                <GridRow centered>
                    <GridColumn>
                    <Image class="ui centered medium image" src={PureButtons}/>
                    </GridColumn>
                    <GridColumn>
                    <Image class="ui centered small image" src={BoFA}/>
                    </GridColumn>
                    <GridColumn>
                    <Image class="ui centered medium image" src={FCI}/>
                    </GridColumn>
                </GridRow>
            </Grid>}
            <a  class="ui orange button" href="mailto:code4change.shpeuf@gmail.com">Sponsor us!</a>
            
        </div>
        <div>
            <br/>
        </div>
        </>
        
    )
}

export default Sponsors