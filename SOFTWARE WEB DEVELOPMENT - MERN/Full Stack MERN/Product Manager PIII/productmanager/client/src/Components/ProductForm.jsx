import React ,{useState} from 'react';
import axios from 'axios';

const ProductForm=()=>{
    const [title,setTitle]=useState('');
    const [price,setPrice]=useState(0);
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
            <form onSubmit={onSubmitHandler} >
                <div className='form-group my-3'>
                <label htmlFor="title">Title:</label>
                    <input type="text" className='form-control' name="title" onChange={e=>setTitle(e.target.value)} value={title}/>
                </div>
                <div className='form-group my-3'>
                    <label htmlFor="price">Price:</label>
                    <input type="number" className='form-control' name="price" onChange={e=>setPrice(e.target.value)} value={price}/>
                </div>
                <div className='form-group my-3'>
                    <label htmlFor="desc">Description:</label>
                    <textarea type="text" className='form-control' name="desc" onChange={e=>setDesc(e.target.value)}>{description}</textarea>
                </div>
                <div className='App'>
                <button type='submit' className='btn btn-primary'>Create</button>
                </div>
            </form>
        </div>
    )
}

export default ProductForm;