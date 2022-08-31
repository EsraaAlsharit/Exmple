import React, { useState } from 'react'
import axios from 'axios';
import {useHistory} from 'react-router-dom'

const New = () => {
    const [name, setName] = useState(""); 
    const history = useHistory();
    const[error, setError] = useState([])

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors/new', {
            name
        })
            .then(res => history.push("/Dashboard"))
            .catch(err=>{
                // console.log(err.response.data.errors.name.message)
                // console.log(err.response.data.errors)
                const errorObj = err.response.data.errors
                let errArr = []
                for (const key of Object.keys(errorObj)){
                    errArr.push(errorObj[key].message)
                }
                setError(errArr)}
            )
            // history.push("/Dashboard")
    }

    // const Cancel= e=>{
    //     e.preventDefault();
    //     history.push("/Dashboard")
    // }
    return (
        <div className='text-center'>
            
            <div className='card p-5'>
           
                <form onSubmit={onSubmitHandler} className='' >
                <div className='form-group my-2'>
                    <label htmlFor='name'>Name</label>
                    <input type="text" id='name' className='form-control' onChange={(e)=>setName(e.target.value)} value={name}/>
                    {error.map((error,i) => <small className='text-danger' key={i}>{error}</small>)}
                </div>
                <div className='form-group d-flex justify-content-around'>
                {/* <button onClick={Cancel} className='btn btn-primary' >Cancel</button> */}
                <a href="/Dashboard" className='btn btn-primary'>Cancel</a>
                <input type="submit" className='btn btn-primary' value="Submit"/>
                
                </div>
                </form>
            </div>
        </div>       
    )
}

export default New;