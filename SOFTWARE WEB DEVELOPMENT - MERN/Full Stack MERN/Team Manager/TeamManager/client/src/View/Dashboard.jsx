import React from 'react'
import PlayerTable from '../Components/PlayerTable'
import Player from '../Components/Player'
import {
    BrowserRouter,
    Switch,
    Route,
  } from "react-router-dom";
import New from '../Components/New';
import Game from '../Components/Game';
import Detail from './Detail';
import GameTable1 from '../Components/GameTable1';
import GameTable2 from '../Components/GameTable2';
import GameTable3 from '../Components/GameTable3';

const Dashboard = () =>{

    return (
        <div className='continuer m-5'>
        <h1><a href='/Players/List'>Manage Players</a> | <a href='/status/game/1'>Mange Player Status</a></h1>
        <div className='continuer m-5 p-5 border border-dark'>
        <BrowserRouter>
        <Switch>
          <Route exact path="/Players/List">
            <Player />
            <PlayerTable/>
          </Route>
          <Route exact path="/Players/addPlayer">
          <Player/>
          <New />
          </Route>
          <Route path="/Players/:id">
            <Detail />
          </Route>
          <Route path="/status/game/1">
            <Game/>
            <GameTable1/>
          </Route>
          <Route path="/status/game/2">
            <Game/>
            <GameTable2/>
          </Route>
          <Route path="/status/game/3">
            <Game/>
            <GameTable3/>
          </Route>
        </Switch>
      </BrowserRouter>
        </div>
        </div>
    );
}
export default Dashboard;