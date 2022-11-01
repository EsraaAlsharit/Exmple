import React ,{useState} from 'react';
import axios from 'axios';
import Form from '../Components/Form'

const ProductForm=()=>{
    const [title,setTitle]=useState('');
    const [price,setPrice]=useState();
    const [description,setDesc]=useState('');

    const onSubmitHandler= (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/new/product",{title,price,description})
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    };

    return(
        <div className='container my-5'>
        <h1 className='App'>Product Manager</h1>
            <Form function={onSubmitHandler} setTitle={setTitle} title={title}
            price={price} setPrice={setPrice} description={description} setDesc={setDesc}  />
        </div>
    )
}

export default ProductForm;