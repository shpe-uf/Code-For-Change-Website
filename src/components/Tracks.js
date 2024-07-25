import React from "react";
import { useState } from "react";
import {
    Card
  } from "semantic-ui-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./Tracks.css"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';



import TrackModal from "./TrackModal";
import Trophy from "./media/trophy.png"

function Tracks(){
    const tracks = [
        {
            title: "Education",
            description: "Lorem Ipsum"

        },
        {
            title: "Health",
            description: "Lorem Ipsum"
            
        },
        {
            title: "Environment",
            description: "Lorem Ipsum"
            
        },
        {
            title: "Sponsor Challenge",
            description: "Lorem Ipsum"
            
        }
    ]

    const [open, setOpen] = useState(false);
    const [selectedtrack, setSelectedtrack] = useState({ title: '', description: '' });
  
    const handleOpen = (track) => {
      setSelectedtrack(tracks[track]);
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


    return(

        
        <div className="tracks">
            <h2 className="c4c-title">
                    TRACKS
             </h2>
             <h3 className="c4c-subtitle">
                    The winning team of each category will receive $100!
                </h3>
                <Swiper
                modules={[Navigation, Pagination, Scrollbar]}
                spaceBetween={50}
                slidesPerView={3}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                navigation={true}
                
                >
                <SwiperSlide>
                    <div class="ui fluid link card" onClick={() => handleOpen(0)}>
                    <div class="image">
                        <img src={Trophy} alt="Trophy"/>
                    </div>
                    <div class="content">
                        <a class="header">Most Innovative: <br></br> Education</a>
                    </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                <div class="ui fluid link card" onClick={() => handleOpen(1)}>
                    <div class="image">
                        <img src={Trophy} alt="Trophy"/>
                    </div>
                    <div class="content">
                        <a class="header">Most Innovative: <br></br> Health</a>
                    </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div class="ui fluid link card" onClick={() => handleOpen(2)}>
                    <div class="image">
                        <img src={Trophy} alt="Trophy"/>    
                    </div>
                    <div class="content">
                        <a class="header">Most Innovative: <br></br> Environment</a>
                    </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div class="ui fluid link card" onClick={() => handleOpen(3)}>
                    <div class="image">
                        <img src={Trophy} alt="Trophy"/>
                    </div>
                    <div class="content">
                        <a class="header">Most Innovative: <br></br> Sponsor Challenge</a>
                    </div>
                    </div>
                </SwiperSlide>
                </Swiper>

                <TrackModal open={open} onClose={handleClose}title={selectedtrack.title} description={selectedtrack.description}/>
                </div>
    );
}

export default Tracks;