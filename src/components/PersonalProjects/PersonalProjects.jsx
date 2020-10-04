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
            <ul>
                {personalProjects.map(p => (
                    <div key={p._id} className="personal_projects_list_item">
                        <li>
                            <img style={{ height: "80px", margin: "1rem" }} src={p.image} alt=""/>
                            <div style={{display: "flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", width: "95%"}}>
                                <h3>
                                    {p.title}
                                </h3>
                                <div style={{display: "flex", flexDirection:"row", alignItems:"center"}}>
                                <a href={p.github}>
                                    <img src={GitHubLogo} alt="" style={{height: "28px"}}/>
                                </a>
                                <a href={p.url}>
                                    <div style={{ backgroundColor: "white", borderRadius: "100%", height: "25px", width: "25px", display: "flex", alignItems:"center", justifyContent:"center"}}>
                                        <img src={LinkLogo} alt="" style={{height: "20px"}} />
                                    </div>                
                                </a>
                                </div>
                            </div>
                            <p style={{ color:"white" }}>{p.desc}</p>
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default PersonalProjects;