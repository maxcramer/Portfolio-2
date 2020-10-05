import React, { useState, useEffect } from 'react';

import { getPersonalProjects } from '../../services/firestoreService';
import GitHubLogo from '../media/githubLogo.png';
import LinkLogo from '../media/link-2.png';

import './PersonalProjects.scss';

function PersonalProjects() {
    const [personalProjects, setPersonalProjects] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const personalProjects = await getPersonalProjects();
            setPersonalProjects(personalProjects);
        }
        fetchData();
    }, [])
    return (
        <div className="personalProjects_container" id="personalprojects">
            <h2 id="pp_title">Personal Side Projects</h2>
            <ul>
                {personalProjects.map(p => (
                    <div key={p._id} className="personal_projects_list_item">
                        <li className="list_item">
                            <img className="main_image" src={p.image} alt=""/>
                            <div className="info_div">
                                <h3>
                                    {p.title}
                                </h3>
                                <div className="links">
                                <a href={p.github}>
                                    <img src={GitHubLogo} alt="" className="github_logo"/>
                                </a>
                                <a href={p.url}>
                                    <div className="url_container">
                                        <img src={LinkLogo} alt="" className="url" />
                                    </div>                
                                </a>
                                </div>
                            </div>
                            <div>
                                <p className="proj_status">Status: {p.status}</p>
                            </div>
                            <div>
                                <div className="stack">
                                    Stack: {p.stack}
                                </div>
                            </div>

                            <p className="desc">{p.desc}</p>
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default PersonalProjects;