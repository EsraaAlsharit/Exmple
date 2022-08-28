import React, {useState} from 'react';
import { useHistory } from "react-router-dom";

const From=(props)=> {

    const [resource, setResource] = useState("people");
    const [selectedId, setSelectedId] = useState("");
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        history.push(`/${resource}/${selectedId}`);
    }

    return (
        <div className='container m-5'>
            <form className="form-inline row align-items-center" onSubmit={handleSubmit}>
                <div className='form-group col-2'>
                <label>Search for: </label>
                </div>
                <div className='form-group mb-2 col-4'>
                <select className='form-control' onChange={ (e)=>setResource(e.target.value)} value={resource} >
                    <option value='people'>People</option>
                    <option value='planet'>Planet</option>
                </select>
                </div>
                <div className="form-group col-1">
                <label>ID: </label>
                </div>
                <div className="form-group col-2">
                <input type='number' className='form-control' onChange={ (e)=>setSelectedId(e.target.value) } value={selectedId} />
                </div>
                <div className='form-group col-2'>
                <input className='btn btn-primary' type="submit" value="Search" />
                </div>
            </form>
        </div>
    )
}

export default From
