import React from 'react'
import New from '../Components/New'

const AddForm = () =>{
    return (
        <div className='continuer my-5'>
        <h1>Favorite authors</h1>  
        <a href='/Dashboard'>Home</a>
        <div className='continuer m-5'>
            <New/>
        </div>
        </div>
    );
}
export default AddForm;