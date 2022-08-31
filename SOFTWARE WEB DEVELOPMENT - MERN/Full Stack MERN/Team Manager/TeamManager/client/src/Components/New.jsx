import React, { useState } from 'react'
import axios from 'axios';
import {useHistory} from 'react-router-dom'

const New = () => {
    const [name, setName] = useState(""); 
    const [position, setPosition] = useState(""); 
    const history = useHistory();
    const[error, setError] = useState([])
    const[errorFront, setErrorFront] = useState('')
    const[safe, setSafe] = useState(true)
    const [Game1, setGame1] = useState(0); 
    const [Game2, setGame2] = useState(0); 
    const [Game3, setGame3] = useState(0); 


    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/players/new', {
            name,
            position,
            Game1,
            Game2,
            Game3
        })
            .then(res => history.push("/Players/List"))
            .catch(err=>{
                const errorObj = err.response.data.errors
                let errArr = []
                for (const key of Object.keys(errorObj)){
                    errArr.push(errorObj[key].message)
                }
                setError(errArr)}
            )
    }

    const nameHandler=(e)=>{
        if(e.target.value.length ===0){
            setErrorFront("name is required")
        }else if(e.target.value.length <=2){
            setErrorFront("name min length is 2")}
        else{
            setErrorFront("")
            setSafe(false)
            setName(e.target.value)
    }}

    return (
        <div className=''>
            <div className='card p-5'>
            
                <form onSubmit={onSubmitHandler} className='' >
                <div className='form-group my-2'>
                    <label htmlFor='name'>Player Name</label>
                    <input type="text" id='name' className='form-control' onChange={nameHandler} />
                    {error.map((error,i) => <small className='text-danger' key={i}>{error}</small>)}
                    <small className='text-danger' >{errorFront}</small>
                </div>
                <div className='form-group my-2'>
                    <label htmlFor='position'>prefer position</label>
                    <input type="text" id='position' className='form-control' onChange={(e)=>setPosition(e.target.value)} value={position}/>
                </div>
                <div className='form-group d-flex justify-content-around'>
                <input type="submit" id='' className='btn btn-primary' disabled={safe} value="Submit"/>
                </div>
                </form>
            </div>
        </div>       
    )
}

export default New;