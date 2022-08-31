import React from 'react'
import Table from '../Components/Table'

const Dashboard = () =>{

    return (
        <div className='continuer m-5'>
        <h1><a href='/Players/List'>Manage Players</a> | <a href='/status/game/1'>Mange Player Status</a></h1>
        <div className='continuer m-5 p-5 border border-dark'>
        <h3><a href='/Players/List'>List</a> | <a href='/Players/addPlayer'>Add Player</a></h3>
        <Table/>
        </div>
        </div>
    );
}
export default Dashboard;