import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import ProductList from '../Components/ProductList'
import ProductForm from '../Components/ProductForm'

const Main = () =>{
    const [Product, setProducts] = useState([])
    useEffect( ()=>   {
        axios.get("http://localhost:8000/api/products")
        .then(res => setProducts(res.data))
        .catch(err => console.error(err))
    },[Product])

    return (
        <>
        <ProductForm />
        <hr/>
        <ProductList Products={Product} />
        </>
    );
}
export default Main;