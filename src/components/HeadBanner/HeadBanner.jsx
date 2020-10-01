import React, { Component } from 'react';

import MyMovie from '../media/MyMovie.mp4';


function HeadBanner () {


    return (
        <div>
            <h1>Head Banner</h1>
            <video autoPlay loop>
                <source src={MyMovie} type="video/mp4" />
            </video>
        </div>
        
    )
}

export default HeadBanner