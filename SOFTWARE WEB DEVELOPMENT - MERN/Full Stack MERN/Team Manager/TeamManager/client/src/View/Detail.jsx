import React,{ useEffect,useState } from 'react'
import { useParams,useHistory } from "react-router-dom";
import axios from 'axios';

const Detail = () =>{
    const [Player, setPlayer] = useState({}); 
    const {id}=useParams();
    // useEffect( ()=>   {
    //     axios.get("http://localhost:8000/api/players")
    //     .then(res => setPlayer(res.data))
    //     .catch(err => console.error(err))
    // },[Player])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/players/'+id)
        .then(res=>setPlayer(res.data))
        .catch(err=>console.error(err));
    },[id])
    return (
        <div className='continuer '>
        <h2>{Player.name}</h2>
        <h6>{Player.position}</h6>
        </div>
    );
}
export default Detail;