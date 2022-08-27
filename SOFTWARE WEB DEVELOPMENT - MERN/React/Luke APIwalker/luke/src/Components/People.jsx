import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';


function People(props) {
    const {id} = useParams();
    const [people, setPeople] = useState({});

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response=>{console.log(response)
                setPeople(response.data)
            })
            .catch(err => console.log(err))
    }, [id]); 
    return (
        <div className=''>
            <h2 className='my-3'>{people.name}</h2>
            <p><b>Height:</b> {people.height}</p>
            <p><b>Mass:</b> {people.mass}</p>
            <p><b>Hair Color:</b> {people.hair_color}</p>
            <p><b>Skin Color:</b> {people.skin_color }</p>
        </div>
    );
    
}

export default People
