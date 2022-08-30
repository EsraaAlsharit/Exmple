import React, { useState,useEffect } from 'react'
import axios from 'axios';
import {Link} from "react-router-dom";

const Table = (props) => {
    const [authors, setauthors] = useState([]); 

    const handleDelete = (id) =>{
        axios.delete("http://localhost:8000/api/authors/delete/"+id)
        .then(res => console.log(res.data))
        .catch(err => console.error(err))
    }
    
    useEffect( ()=>   {
        axios.get("http://localhost:8000/api/authors")
        .then(res => setauthors(res.data))
        .catch(err => console.error(err))
    },[authors])

    return (
        <div className='text-center'>
            <table className='table text-center table-bordered'>
                <tr>
                    <th>Author</th>
                    <th>Actions available</th>
                </tr>
                {
            authors.map((author,i) =>{
                return (
                    <tr className=''>
                        <td>{author.name}</td>
                        <td className='d-flex justify-content-around'>
                            <Link className='btn' to={"/edit/"+author._id}>Edit</Link>
                            <button className='btn ' onClick={()=>{handleDelete(author._id)}}>Delete</button>
                        </td>
                    </tr>
                )
            })
        }
                <tr>
                    
                    <td>{}</td>
                    <td></td>
                </tr>
            </table>
       
            </div>
        
        
    )
}

export default Table;