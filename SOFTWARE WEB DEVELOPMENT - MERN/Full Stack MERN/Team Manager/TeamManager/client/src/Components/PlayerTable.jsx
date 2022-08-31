import React, { useState,useEffect } from 'react'
import axios from 'axios';
import {Link} from "react-router-dom";

const PlayerTable = (props) => {
    const [Players, setPlayers] = useState([]); 

    const handleDelete = (Player) =>{
        var answer = window.confirm(`are you sure you want to remove ${Player.name}`);
        if(answer){
            axios.delete("http://localhost:8000/api/players/delete/"+Player._id)
        .then(res => console.log(res.data))
        .catch(err => console.error(err))
        }
    }
    
    useEffect( ()=>   {
        axios.get("http://localhost:8000/api/players")
        .then(res => setPlayers(res.data))
        .catch(err => console.error(err))
    },[Players])

    return (
        <div className='continuer '>
            <table className='table table-striped  table-bordered'>
                <tr>
                    <th>Team Names</th>
                    <th>Preferred Position</th>
                    <th>Action</th>
                </tr>
                <tbody className=''>
                {
            Players.map((Player,i) =>{
                return (
                    <tr className=''>
                       <td> 
                        <Link className='' to={"/Players/"+Player._id}> {Player.name}</Link>
                        </td>
                        <td>{Player.position}</td>
                        <td className='text-center'>
                            <button className='btn btn-danger' onClick={()=>{handleDelete(Player)}}>Delete</button>
                        </td>
                    </tr>
                )
            })
        }
              </tbody>
            </table>
       
            </div>
        
        
    )
}

export default PlayerTable;