import React from 'react'
import {Link} from "react-router-dom";


const ProductList = (props) => {
   
    return (
        <div className='text-center'>
            <h2>All Products:</h2>
            <ul className='list-group list-group-flush '>
        {
            props.Product.map((Product,i) =>{
                return (
                    <li className=''>
                    <Link to={"/product/"+Product._id} className="text-dark h5"><p key={i}>{Product.title}</p></Link>
                    </li>
                )
            })
        }
        </ul>
        </div>
    );
}
export default ProductList;