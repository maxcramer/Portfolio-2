import React, { useState, useEffect } from 'react';

import { getPersonalProjects } from '../../services/firestoreService';

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
                            <h3>
                                {p.title}
                            </h3>
                            <img style={{ height: "50px" }} src={p.image} alt=""/>
                            <p style={{ color:"white" }}>{p.desc}</p>
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default PersonalProjects;