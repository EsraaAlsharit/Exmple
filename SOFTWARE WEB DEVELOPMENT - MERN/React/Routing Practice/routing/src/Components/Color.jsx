import React from "react";
import { useParams } from "react-router-dom";

const Color = (props) =>{
    const {word,textColor,bgColor} = useParams();
    return(
        <div className=" my-5">
        <h1 className="p-4 border border-dark" style={{color:textColor,backgroundColor:bgColor}} >The Word is: {word}</h1>
        </div>
    )
}
export default Color;