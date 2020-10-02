import React, { Component } from 'react';

import MyMovie from '../media/MyMovie.mp4';
import './HeadBanner.scss';


function HeadBanner () {


    return (
            <div className="banner_container">
            <div className="full_opaque_background">
            </div>
            <div className="side_background">
            </div>
                <div className="text_items">
                <h1>Max Cramer</h1>
                <h3>Web Developer</h3>
                <h3>Pro Onewheel Rider</h3>
                </div>           
            <video id="header_video" autoPlay loop muted>
                 <source src={MyMovie} type="video/mp4" />
             </video>
        </div>        
    )
}

export default HeadBanner 