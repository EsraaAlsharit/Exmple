import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Planet(props) {

    const [planet, setPlanet] = useState('');

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planet/${props.id}`)
             .then(response=> console.log(response.data) )
             .then(response=> setPlanet(response.data) )
             .catch(err => console.log(err) )
    }, [props.id])

    return (
        <div>
            <h2>{planet.name}</h2>
            <p><b>Climate:</b> {planet.climate}</p>
            <p><b>Terrian:</b> {planet.terrian}</p>
            <p><b>Surface Water:</b> {planet.surface_water}</p>
            <p><b>Population:</b>{planet.population}</p>
        </div>
    )
}

export default Planet
