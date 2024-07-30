import React from "react";
import { GridRow, GridColumn, Grid, Image, Button } from 'semantic-ui-react'


import "./sponsors.css"
import google from "./media/image 2.png"
import apple from "./media/image 3.png"
import netflix from "./media/image 4.png"


function Sponsors(){
   
    return(
        <>
        <div className="sponsors-container">
            <h1 className="sponsor-title">Ready to blast off with us? </h1>
            {/* <Grid columns={3} centered>
                <GridRow centered>
                    <GridColumn>
                    <Image class="ui centered medium image" src={google}/>
                    </GridColumn>
                    <GridColumn>
                    <Image class="ui centered medium image" src={apple}/>
                    </GridColumn>
                    <GridColumn>
                    <Image class="ui centered medium image" src={netflix}/>
                    </GridColumn>
                </GridRow>
            </Grid>*/}
            <a  class="ui orange button" href="mailto:code4change.shpeuf@gmail.com">Sponsor us!</a>
            
        </div>
        <div>
            <br/>
        </div>
        </>
        
    )
}

export default Sponsors