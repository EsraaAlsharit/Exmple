import React, {useState, useEffect} from 'react'
import axios from 'axios';


function People(props) {
    
    const [person, setPerson] = useState('');

    console.log(props.id)
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${props.id}`)
             .then( response => setPerson(response.data) )
             .catch( err => console.log(err));
    }, [props.id]);
            
    return (
        <div>
            <h2>{person.name}</h2>
            <p><b>Height:</b> {person.height}</p>
            <p><b>Mass:</b> {person.mass}</p>
            <p><b>Hair Color:</b> {person.hair_color}</p>
            <p><b>Skin Color:</b> {person.skin_color }</p>
        </div>
    )
}

export default People
