import React, {useState} from 'react';
import { useHistory } from "react-router-dom";

function From() {

    const [resource, setResource] = useState("people");
    const [selectedId, setSelectedId] = useState("");
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        history.push(`/${resource}/${selectedId}`);
    }

    return (
        <div className='container m-5'>
            <form className="form-inline" onSubmit={handleSubmit}>
                <div className='form-group mb-2'>
                <label>Search for: </label>
                <select className='form-control' onChange={ e=>setResource(e.target.value)} value={resource} >
                    <option value='people'>People</option>
                    <option value='planet'>Planet</option>
                </select>
                </div>
                <div className="form-group mx-sm-3 mb-2">
                <label>ID: </label>
                <input type='number' className='form-control' onChange={ e=>setSelectedId(e.target.value) } value={selectedId} />

                </div>
                <input className='btn btn-primary' type="submit" value="Search" />
            </form>
        </div>
    )
}

export default From
