import React from 'react'

const ErrorPage = () =>{

    return (
        <div className='continuer my-5'>
        <h1>Favorite authors</h1>
        <a href='/Dashboard'>Back Home</a>
        <div className='continuer m-5'>
            <h6>We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?</h6>
        </div>
        </div>
    );
}
export default ErrorPage;