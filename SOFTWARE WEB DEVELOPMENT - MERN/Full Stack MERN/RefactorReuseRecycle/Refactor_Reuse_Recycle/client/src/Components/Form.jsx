import React from 'react';

const ProductForm=(props)=>{
    // const [title,setTitle]=useState('');
    // const [price,setPrice]=useState();
    // const [description,setDesc]=useState('');
    



    return(
        <form onSubmit={props.function} >
        <div className='form-group my-3'>
        <label htmlFor="title">Title:</label>
            <input type="text" className='form-control' name="title" onChange={(e)=>props.setTitle(e.target.value)} value={props.title}/>
        </div>
        <div className='form-group my-3'>
            <label htmlFor="price">Price:</label>
            <input type="number" className='form-control' name="price" onChange={e=>props.setPrice(e.target.value)} value={props.price}/>
        </div>
        <div className='form-group my-3'>
            <label htmlFor="desc">Description:</label>
            <textarea type="text" className='form-control' name="desc" onChange={e=>props.setDesc(e.target.value)} value={props.description}>{props.description}</textarea>
        </div>
        <div className='App'>
        <button type='submit' className='btn btn-primary'>submit</button>
        </div>
          </form>
    )
}

export default ProductForm;