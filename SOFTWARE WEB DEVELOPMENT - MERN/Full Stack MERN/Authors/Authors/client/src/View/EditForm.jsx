import React, { useEffect,useState } from 'react'
import axios from 'axios';
import {useParams, useHistory} from 'react-router-dom'

const EditForm = () => {
    const [name, setName] = useState(""); 
    const history = useHistory();
    const[error, setError] = useState([])
    const {id} = useParams();

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/authors/update/'+id, {
            name
        }).then(res => history.push("/Dashboard"))
            .catch(err=> {
                // console.log(err.response.data.errors)
                const errorObj = err.response.data.errors
                let errArr = []
                for (const key of Object.keys(errorObj)){
                    errArr.push(errorObj[key].message)
                }
                setError(errArr)
            })          
            
    }

    useEffect( ()=>   {
        axios.get("http://localhost:8000/api/authors/"+id)
        .then(res => {setName(res.data.name) })
        .catch(err => console.error(err))
    },[id])

    
    useEffect(()=>{
        if(name===undefined){
            history.push("/Error")
        }
    })

    // const onSubmitHandler = e => {
    //     e.preventDefault();
    //     axios.put('http://localhost:8000/api/authors/update/'+id, {
    //         name
    //     })
    //         .then()
    //         .catch(err=>console.log(err))
    //         history.push("/Dashboard")
    // }

    return (
        <div className='continuer my-5'>
        <h1>Update Favorite authors</h1>
        <a href='/Dashboard'>Home</a>
        <div className='continuer m-5'>
        
        <p>Edit this author:</p>
        <div className='text-center'>
            <div className='card p-5'>
                <form onSubmit={onSubmitHandler} className='' >
                <div className='form-group my-2'>
                    <label htmlFor='name'>Name</label>
                    <input type="text" id='name' className='form-control' onChange={(e)=>setName(e.target.value)} value={name}/>
                    {error.map((error,i) => <small className='text-danger' key={i}>{error}</small>)}
                </div>
                <div className='form-group d-flex justify-content-around'>
                
                <a href="/Dashboard" className='btn btn-primary'>Cancel</a>
                <input type="submit" className='btn btn-primary' value="Submit"/>
                
                </div>
                </form>
            </div>
        </div> 
        </div>
        </div>
    )
}

export default EditForm;