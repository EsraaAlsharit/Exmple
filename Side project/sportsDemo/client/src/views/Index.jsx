
import React , {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import DeleteBtn from "../components/DeleteBtn";
import axios from "axios";


function Index(props) {
    const [alhletes, setalhetes]= useState([]);

    useEffect( ()=>   {
        axios.get("http://localhost:8001/api/athletes")
        .then(res => setalhetes(res.data))
        .catch(err => console.error(err))
    },[alhletes])

    return (
    <div className="App">
        <h1>Athletes</h1>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <div className="nav">
            <Link to={"/create"}> Create</Link>
        </div>

        <ul className="components list">
            {alhletes.map((alhlete, i)=>{
                return(
                <li className="components" key={i}>
                    <Link to={"/"+alhlete._id}> {alhlete.fname} {alhlete.lname}</Link> | <Link to={"/"+alhlete._id+"/edit"}> Edit</Link> | <DeleteBtn id={alhlete._id}/>
                </li>
                )
            })}
            
        </ul>
        
    </div>
    );
}

export default Index;
