import React , {useState} from "react";
import {
    TextField,
    Button
} from '@mui/material';
// import axios from "axios";
// import { useParams,useHistory } from "react-router-dom";

function Form(props) {
const {onSubmitHandler, initialFname, initialLname, initialSport , initialTeam}=props;

const [fname , setFname]= useState(initialFname);
const [lname , setLname]= useState(initialLname);
const [sport , setSport]= useState(initialSport);
const [team , setTeam]= useState(initialTeam);

  return (
    <form onSubmit={e => { onSubmitHandler(e, { fname, lname, sport, team })}} >
        <div className="components">
          {/* <input type={"text"} onChange={e=> {setFname((e).target.value)}} value={fname}/> */}
        <TextField id="outlined-basic" label="First Name"  variant="outlined"  onChange={e=> {setFname((e).target.value)}} value={fname} />
        </div>
        <div className="components">
          {/* <input type={"text"} value={lname} onChange={e=> {setLname((e).target.value)}}/> */}
        <TextField id="outlined-basic" label="Last Name" variant="outlined" onChange={e=> {setLname((e).target.value)}} value={lname} />
        </div>
        <div className="components">
        {/* <input type={"text"} value={sport} onChange={e=> {setSport((e).target.value)}}/> */}
        <TextField id="outlined-basic" label="Sport" variant="outlined"  onChange={e=> {setSport((e).target.value)}} value={sport} />
        </div>
        <div className="components">
        {/* <input type={"text"} value={team} onChange={e=> {setTeam((e).target.value)}}/> */}
        <TextField id="outlined-basic" label="Team" variant="outlined" onChange={e=> {setTeam((e).target.value)}} value={team}/>
        </div>
        <div className="components"> 
        {/* <input type="submit"  value={"sub"}/> */}
        <Button variant="contained" type="submit">Submit</Button>
        </div>
    </form>
  );
}

export default Form;
 