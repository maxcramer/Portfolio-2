import React from 'react';

import githubLogo from '../media/githubLogo.png';

import './GitHubGraph.scss';

function GitHubGraph() {
    return (
        <div className="graph_container">
            <div id="graph_border">
            <span className="graph_title_and_logo">
                <h2 id="graph_title">GitHub Commits</h2>
                <img id="github_logo" src={githubLogo} alt=""/>
            </span>
                <img className="graph_image" src="https://grass-graph.moshimo.works/images/maxcramer.png?background=none" />
            </div>
            
        </div>
    )
} 

export default GitHubGraph;