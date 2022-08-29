import React from 'react'
import {Link} from "react-router-dom";


const ProductList = (props) => {
   
    return (
        <div className='text-center'>
            <h2>All Products:</h2>
            <ul className='list-group list-group-flush '>
        {
            props.Products.map((product,i) =>{
                return (
                    <li className=''>
                    <Link to={"/product/"+product._id} className="text-dark h5"><p key={i}>{product.title}</p></Link>
                    </li>
                )
            })
        }
        </ul>
        </div>
    );
}
export default ProductList;