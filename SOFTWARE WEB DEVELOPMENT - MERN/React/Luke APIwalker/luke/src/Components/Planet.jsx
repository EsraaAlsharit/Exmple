import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

function Planet(props) {

    const {id} = useParams();
    const [planet, setPlanet] = useState({}); 

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(response=>{console.log(response)
                setPlanet(response.data)
            })
            .catch(err => console.log(err))
    }, [id]); 
    return (
        <div className=''>
            <h2 className='my-3'>{planet.name}</h2>
            <p><b>Climate:</b> {planet.climate}</p>
            <p><b>Terrain:</b> {planet.terrain}</p>
            <p><b>Surface Water:</b> {planet.surface_water}</p>
            <p><b>Population:</b>{planet.population}</p>
        </div>
    );
    


}

export default Planet
