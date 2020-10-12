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
                        Outside of coding, riding Onewheel is my main passion. I have been riding these boards for a little over three years and am always trying to push the sport. I was the first person to be sponsored for riding in Europe and am currently considered the number one rider in Europe.
                        <br />
                        I also run the UK Onewheel community through online groups. I love this fantastic community with such a wide range of riders, both in-person and skill. I have met so many wonderful people while riding around London together and have inspired me to take my tricks to the next level.                        
                        <br />
                        I currently have three sponsors for riding Onewheel; Pinkoak who make third party accessories for the boards, Personal Electric Transport who sell Onewheels, along with some incredible scooters and EUC's, and HopBarUK, the UK's first Cricket flour-based protein bar. 
                        <br />
                        I enjoy teaching people to ride Onewheel, I am always trying to grow the community. I have been known to (when not in a rush), stop on the street if I am not in a rush to let someone try it out if I see them looking interested in the board. If you would like to learn, please do reach out to me and I will always be happy to try and help. 
                    </p>
                </div>
                <div id="instafeed"> 
                    <video autoPlay loop muted playsInline preload="auto">
                        {/* <source src="https://firebasestorage.googleapis.com/v0/b/funkynana-bf9f1.appspot.com/o/Nose%20Slide%20X%20Sex%20Change%20.mp4?alt=media&token=d01b5c2f-f501-421e-b82e-7a405a114a31" type="video/mp4" /> */}
                    </video>
                    <video autoPlay loop muted playsInline preload="auto">
                        {/* <source src="https://firebasestorage.googleapis.com/v0/b/funkynana-bf9f1.appspot.com/o/Olympic%20park%2016.09.20.mp4?alt=media&token=1e7185ba-1662-4a94-b626-84f7d479013d" type="video/mp4" /> */}
                    </video>
                    <video autoPlay loop muted playsInline preload="auto">
                        {/* <source src="https://firebasestorage.googleapis.com/v0/b/funkynana-bf9f1.appspot.com/o/onewheel3line%20challenge.mp4?alt=media&token=c45f4fc5-ca44-4951-ac1a-de70f6eefcd3" type="video/mp4" /> */}
                    </video>
                    <video autoPlay loop muted playsInline preload="auto">
                        {/* <source src="https://firebasestorage.googleapis.com/v0/b/funkynana-bf9f1.appspot.com/o/curb%20slides%2008.08.20.mp4?alt=media&token=8093e597-cc1b-4b3b-a42b-2944f0af89fa" type="video/mp4" /> */}
                    </video>

                </div>
            </div>

        </div>
    )
}

export default Onewheel;