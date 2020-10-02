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
                    <div key={p._id}>
                        <li>
                            <h3>
                                {p.title}
                            </h3>
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default PersonalProjects;