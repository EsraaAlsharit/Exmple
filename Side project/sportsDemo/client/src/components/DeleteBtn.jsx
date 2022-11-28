
import React from "react";
import {
    Button
} from '@mui/material';
import axios from 'axios';
import { useHistory } from "react-router-dom";

function DeleteBtn(props) {

  
  const history=useHistory();

  const handleDelete = (id) =>{
      axios.delete("http://localhost:8001/api/athletes/delete/"+id)
      .then(res => console.log(res.data))
      .catch(err => console.error(err))
      history.push("/")
  }

  return (
     <Button variant="contained" onClick={()=>{handleDelete(props.id)}}>Delete</Button>
  );
}

export default DeleteBtn;
 