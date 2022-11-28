
import React , {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import DeleteBtn from "../components/DeleteBtn";
import axios from "axios";

function Detail(props) {
  
  const {id}=useParams();

  const [alhlete, setalhete] = useState({}); 
  

  useEffect(()=>{
      axios.get('http://localhost:8001/api/athletes/'+id)
      .then(res=>setalhete(res.data))
      .catch(err=>console.error(err));
  },[id])

  return (
    <div className="App">
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <h3>{alhlete.fname} {alhlete.lname}</h3>
        <h4>{alhlete.sport}</h4>
        <DeleteBtn id={alhlete._id}/>
    </div>
  );
}

export default Detail;
