import React from 'react';

import './GitHubGraph.scss';

function GitHubGraph() {
    return (
        <div className="graph_container">
            <h2 id="graph_title">GitHub Commits</h2>
            <img className="graph_image" src="https://grass-graph.moshimo.works/images/maxcramer.png" />
        </div>
    )
}

export default GitHubGraph;