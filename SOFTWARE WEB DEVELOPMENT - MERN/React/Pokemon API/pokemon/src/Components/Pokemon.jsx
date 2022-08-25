import React, { useState,useEffect  } from 'react';

const Pokemon = props => {
    
    
    const [Poke, setPoke] = useState([]);

    const FetchPoke=(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
            .then(response => response.json())
            .then(response => setPoke(response.results))
            .catch(err=>{console.log(err);});
    });


    // const FetchPoke=(e)=>{
    //     e.preventDefault();
    //     console.log(Poke)
    //     useEffect(() => {
    //         fetch('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
    //             .then(response => response.json())
    //             .then(response => setPoke(response.results))
    //             .catch(err=>{console.log(err);});
    //     }, []);
    //     console.log(Poke)
    // }

    return (
        <div className='d-flex justify-content-center container my-5'>
            <div>
            <div className=''>
            <button className='btn btn-secondary' onClick={useEffect}>Fetch Pokemon</button>
            </div>
            <ul className='text-center my-3'>
            {Poke.length > 0 && Poke.map((poke, index)=>{
                return (<li key={index}>{poke.name}</li>)
            })}
            </ul>
            </div>
        </div>

    );
};

export default Pokemon;
