import React, { useState, useEffect } from 'react';

import { getWorks } from '../../services/firestoreService';
import LinkLogo from '../media/link-2.png';

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
                            <img className="work_img" src={w.img} alt=""/>
                            <h3>{w.ProjectTitle}</h3>
                            <h4>Company: {w.company}</h4>
                            <h4>Client: {w.Client}</h4>
                            <a href={w.url}>
                                <div className="url_container">
                                    <img src={LinkLogo} alt="" className="url" />
                                </div>
                            </a>
                            <p>Build Time: {w.BuildTime}</p>
                            <p>Tech Used{w.TechUsed}</p>
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    )
}


export default Work;