import React from 'react';
import InstagramEmbed from 'react-instagram-embed';


import './Onewheel.scss';

function Onewheel() {

    return (
        <div id="onewheel">
            <div id="onewheel_title_div">
                <h1>Onewheel</h1>
            </div>
            <div id="onewheel_about_insta">
                <div id="about_onewheel">
                    <p>
                        info about me riding onewheel test test 2
                    </p>
                </div>
                <div id="instafeed"> 
                    <video autoPlay loop muted playsInline preload="auto">
                        <source src="https://firebasestorage.googleapis.com/v0/b/funkynana-bf9f1.appspot.com/o/Nose%20Slide%20X%20Sex%20Change%20.mp4?alt=media&token=14ca3903-293f-41b9-9a3c-eb557b01ee6a" type="video/mp4" />
                    </video>
                    <video autoPlay loop muted playsInline preload="auto">
                        <source src="https://firebasestorage.googleapis.com/v0/b/funkynana-bf9f1.appspot.com/o/Olympic%20park%2016.09.20.mp4?alt=media&token=1e7185ba-1662-4a94-b626-84f7d479013d" type="video/mp4" />
                    </video>
                    <video autoPlay loop muted playsInline preload="auto">
                        <source src="https://firebasestorage.googleapis.com/v0/b/funkynana-bf9f1.appspot.com/o/onewheel3line%20challenge.mp4?alt=media&token=c45f4fc5-ca44-4951-ac1a-de70f6eefcd3" type="video/mp4" />
                    </video>
                    <video autoPlay loop muted playsInline preload="auto">
                        <source src="https://firebasestorage.googleapis.com/v0/b/funkynana-bf9f1.appspot.com/o/curb%20slides%2008.08.20.mp4?alt=media&token=8093e597-cc1b-4b3b-a42b-2944f0af89fa" type="video/mp4" />
                    </video>

                </div>
            </div>

        </div>
    )
}

export default Onewheel;