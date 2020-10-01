import React, { Component } from 'react';

import MyMovie from '../media/MyMovie.mp4';


function HeadBanner () {


    return (
        <div>
            <video id="header_video" autoPlay loop muted >
                <source src={MyMovie} type="video/mp4" />
            </video>
        </div>
        
    )
}

export default HeadBanner