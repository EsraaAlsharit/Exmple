import React from "react";
import { useParams } from "react-router-dom";

const Word = (props)=>{
    const {word} = useParams();
    return(
        <div className="container my-5">
        {
        isNaN(word)?
        <h1>The word is: {word}</h1>:
        <h1>The Number is: {word}</h1>
        }
        </div>
    )
}
export default Word;