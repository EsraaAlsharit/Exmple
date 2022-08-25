import React from 'react';
import { useState } from 'react';
import axios from 'axios';


const Axios = (props) => {

    const [responseData, setResponseData] = useState([]);

    // axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0').then(response => {
    //     console.log(response.data.results);
        
    // })


    const FetchPoke = (() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
            .then(response => { setResponseData(response.data.results) });
    });


    return (
        <div className='d-flex justify-content-center container my-5'>
            <div>
                <div className=''>
                    <button className='btn btn-secondary' onClick={FetchPoke} >Fetch Pokemon</button>
                </div>
                <ul className='text-center my-3'>
                    {responseData.map((poke, index) => {
                        return (<li key={index}>{poke.name}</li>)
                    })}
                </ul>
            </div>
        </div>

    );
};
export default Axios