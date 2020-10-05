import React, { useState, useEffect } from 'react';

import { getWorks } from '../../services/firestoreService';

import './Work.scss';


function Work() {
    const [works, setWorks] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const works = await getWorks();
            setWorks(works)
        }
        fetchData();
    }, [])

    return (
        <div className="work_container">
            <h1 className="work_title">
                Development Work During Employment 
            </h1>
            <ul>
                {works.map(w => (
                    <div key={w._id}>
                        <li>
                            {w.company}
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    )
}


export default Work;