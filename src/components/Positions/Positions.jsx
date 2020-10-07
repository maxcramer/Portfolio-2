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
        <div>
            <h1>
                POSITIONS
            </h1>
        </div>
    )
}

export default Positions;