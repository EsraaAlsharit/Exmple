import React from 'react'
import Table from '../Components/Table'

const Dashboard = () =>{

    return (
        <div className='continuer my-5'>
        <h1>Favorite authors</h1>
        <a href='/New'>Add an author</a>
        {/* <a href='/new'>Home</a> */}
        <div className='continuer m-5'>
        <Table/>
        </div>
        </div>
    );
}
export default Dashboard;