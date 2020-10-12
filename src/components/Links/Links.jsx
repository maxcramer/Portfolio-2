import React from 'react';

import githubLogo from '../media/githubLogo.png'

import './Links.scss';

function Links() {
    return (
        <div id="links">
            <h1>Links</h1>
            <div id="links_images">
                {/* GITHUB */}
                <a href="https://github.com/maxcramer">
                    <img id="github" src={githubLogo} alt=""/>
                </a>
                {/* LINKEDIN */}
                <a href="https://www.linkedin.com/in/max-cramer/">
                    <img id="linkedIn" src="https://image.flaticon.com/icons/png/512/174/174857.png" alt=""/>
                </a>
            </div>
        </div>
    )
}

export default Links;