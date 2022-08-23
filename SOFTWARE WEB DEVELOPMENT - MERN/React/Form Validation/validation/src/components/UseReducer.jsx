import React, { useState } from 'react';

const UseReducer = (props) => {

    const [Firstname, setFirstnameError] = useState("");
    const [lastname, setLastnameError] = useState("");
    const [email, setEmailError] = useState("");
    //var mailformat = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/";

    const handleFirstname = (e) => {
        if (e.target.value.length < 2) {
            setFirstnameError("First name must be at least 2 characters");
        } else {
            setFirstnameError(" ");
        }
    };

    const handleLastname = (e) => {
        if (e.target.value.length < 2) {
            setLastnameError("Last name must be at least 2 characters");
        } else {
            setLastnameError(" ");
        }
    };

    const handleEmail = (e) => {
        if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(e.target.value)) {
            setEmailError("not Valid Email");
        }
        else {
            setEmailError("");
        }
    };

    return (
        <div className="container m-5">
            <div>
                <form>
                    <div className="form-group my-2">
                        <label>First Name: </label>
                        <input className='form-control' type="text" onChange={handleFirstname} />
                        {
                            Firstname ?
                                <p style={{ color: 'red' }}>{Firstname}</p> :
                                <p></p>
                        }
                    </div>
                    <div className="form-group my-2">
                        <label>Last Name: </label>
                        <input className='form-control' type="text" onChange={handleLastname} />
                        {
                            lastname ?
                                <p style={{ color: 'red' }}>{lastname}</p> :
                                <p></p>
                        }
                    </div>
                    <div className="form-group my-2">
                        <label>Email Address: </label>
                        <input className='form-control' type="email" onChange={handleEmail} />
                        {
                            email ?
                                <p style={{ color: 'red' }}>{email}</p> :
                                <p></p>
                        }
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UseReducer;
