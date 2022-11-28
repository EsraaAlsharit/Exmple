import React, { useState } from "react";
import Form from "../components/form";
import {
    Container
} from '@mui/material';
import axios from "axios";
import {useHistory} from 'react-router-dom';


function Create(props) {
  const history = useHistory();
  const [errors, setErrors] = useState([]);
  

  const onSubmitHandler = (e, data) => {
    e.preventDefault();
    axios.post('http://localhost:8001/api/athletes/new', 
      data
    )
        .then(res => history.push("/"))
        .catch(err=>{
          console.log(err)
          const errorResponse= err.response.data.errors;
          const errrorArr =[];

          for (const key of Object.keys(errorResponse)){
            errrorArr.push(errorResponse[key].message)
          }
          setErrors(errrorArr)
        }
        )
}

    return (
      <div className="App">
        <Container maxWidth="lg" className="">
          <h1>Add Athlete </h1>
          {errors.map((error, index)=>
          {return (
            <p key={index}  >{error}</p>
          )}
          )}
        <meta name="viewport" content="initial-scale=1, width=device-width" />
            <Form 
              onSubmitHandler={onSubmitHandler}
              initialFname={""}
              initialLname={""}
              initialSport={""}
              initialTeam={""}
            />
        </Container>
      </div>
    );
  }
  
  export default Create;
  