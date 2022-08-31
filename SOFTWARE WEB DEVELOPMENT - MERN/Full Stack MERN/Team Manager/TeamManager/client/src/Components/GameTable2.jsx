import React, { useState,useEffect } from 'react'
import axios from 'axios';
import {Link} from "react-router-dom";

const GameTable2 = (props) => {
    const [Players, setPlayers] = useState([]); 
    const [Game1, setGame1] = useState(0); 
    const [Game2, setGame2] = useState(0); 
    const [Game3, setGame3] = useState(0); 
    const [id, setid] = useState(0); 

    useEffect( ()=>   {
        axios.get("http://localhost:8000/api/players")
        .then(res => setPlayers(res.data))
        .catch(err => console.error(err))
    },[Players])

    const updatePlayer = (e) => {
        e.preventDefault();
        setid(e.target.value);
        var num= e.target.id;
        // console.log(num)
        if(num==="play"){
        setGame2(1)
        }else if(num==="not"){
        setGame2(2)
        }else if(num==="none"){
        setGame2(0)
        }
        
         axios.put('http://localhost:8000/api/players/update/'+id, {
            Game2
        })
            .then(res => console.log(res))
            .catch(err => console.error(err));
            
    }

    return (
        <div className='continuer '>
            <table className='table table-striped  table-bordered'>
                <tr>
                    <th>Team Names</th>
                    <th>Action</th>
                </tr>
                <tbody className=''>
                {
            Players.map((Player,i) =>{
                return (
                    <tr className=''>
                       <td> 
                        <Link className='' to={"/Players/"+Player._id}>{Player.name}</Link>
                        </td>
                        <td className='text-center d-flex justify-content-around'>
                            
                            <button className={Player.Game2 === 1 ? "btn btn-success" : "btn btn-light"} id='play' value={Player._id} onClick={updatePlayer} >Playing</button>
                            <button className={Player.Game2 === 2 ? "btn btn-danger" : "btn btn-light"} id='not' value={Player._id} onClick={updatePlayer}>Not Playing</button>
                            <button className={Player.Game2 === 0 ? "btn btn-warning" : "btn btn-light"}  id='none' value={Player._id} onClick={updatePlayer}>Undecided</button>
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

export default GameTable2;