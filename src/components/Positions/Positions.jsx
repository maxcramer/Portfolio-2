import React, { useState, useEffect } from 'react';
import { getPositions } from '../../services/firestoreService';

import './Positions.scss';


function Positions() {
    const [positions, setPositions] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const positions = await getPositions();
            setPositions(positions)
            console.log("Positions", positions)
        }
        fetchData();
    }, [])

    return (
        <div className="positions_container" id="position">
           <h1 className="positions_title">
               Positions
           </h1>
           <ul>
               {positions.map(p => (
                   <div key={p._id}>
                       <li>
                           <img src={p.Logo} alt=""/>
                           <div className="info">
                                <div className="company_position">
                                    <h3>Company: {p.Company}</h3>
                                    <h3>Position: {p.Position}</h3>
                                </div>
                                <div className="dates">
                                    <p>
                                        {p.StartDate} - {p.EndDate}
                                    </p>
                                    |
                                    <p>Duration: {p.Duration}</p>
                                </div>
                                <div className="proj_tech_sal">
                                    <p>
                                        Projects: {p.Projects}
                                    </p>
                                    <p>
                                        Technology: {p.TechUsed}
                                    </p>
                                </div>
                                <p>
                                    {p.Desc}
                                </p>
                           </div>
                       </li>
                   </div>
               ))}
           </ul>
        </div>
    )
}

export default Positions;