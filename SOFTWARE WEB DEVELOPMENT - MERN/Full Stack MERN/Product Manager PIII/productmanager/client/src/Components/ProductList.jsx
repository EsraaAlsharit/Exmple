import React from 'react'
import {Link} from "react-router-dom";
import axios from 'axios'

const ProductList = (props) => {

    const handleDelete = (id) =>{
        axios.delete("http://localhost:8000/api/product/"+id)
        .then(res => console.log(res.data))
        .catch(err => console.error(err))
    }
   
    return (
        <div className='text-center container px-5'>
            <h2>All Products:</h2>
            <ul className='list-group list-group-flush'>
        {
            props.Products.map((product,i) =>{
                return (
                    <li className='list-group-item d-flex justify-content-around my-2'>
                    <Link to={"/product/"+product._id} className="text-dark h5">{product.title}</Link> 
                    <Link to={"/product/edit/"+product._id}>Edit</Link>
                    <button className='btn btn-danger' onClick={()=>{handleDelete(product._id)}}>Delete</button>
                    </li>
                )
            })
        }
        </ul>
        </div>
    );
}
export default ProductList;