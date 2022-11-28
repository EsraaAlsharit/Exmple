
import React, {useEffect,useState} from "react";
import { useParams,useHistory } from "react-router-dom";
import {
    Container
} from '@mui/material';
import Form from "../components/form";
import DeleteBtn from "../components/DeleteBtn";
import axios from "axios";

function Edit(props) {
    const {id}=useParams();
    const history = useHistory();
    const [alhlete , setAlhlete]= useState({});
    const [loaded , setloaded] = useState(false);
    const onSubmitHandler = (e, data) => {
      e.preventDefault();
      axios.put('http://localhost:8001/api/athletes/update/'+id, data
      )
      .then(res => history.push("/"))
      .catch(err=>{
        console.log(err)}
      )
  }

  useEffect(()=>{

   axios.get('http://localhost:8001/api/athletes/'+id)
   .then(res=>{
    setloaded(true)
    setAlhlete(res.data)
   })
   .catch(err=>console.error(err));
 
 },[id])


  return (
    <div className="App">
       <Container maxWidth="lg" className="">
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <h1>Edit Athlete: {alhlete.fname} {alhlete.lname}</h1>
        { loaded &&
          <Form  
          onSubmitHandler={onSubmitHandler} 
          initialFname={alhlete.fname}
          initialLname={alhlete.lname}
          initialSport={alhlete.sport}
          initialTeam={alhlete.team}
          />

        }
            <DeleteBtn id={alhlete._id}/> 
        </Container>
    </div>
  );
}

export default Edit;
