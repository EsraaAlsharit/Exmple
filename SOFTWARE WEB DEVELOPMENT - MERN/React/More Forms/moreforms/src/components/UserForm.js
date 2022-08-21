import React, { useState } from 'react';

const UserForm = (props) => {

    // const [lname, setLastname] = useState("");
    const [email, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCon, setPasswordConform] = useState("");
    // const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [Firstname, setFirstnameError] = useState("");
    const [lastname, setLastnameError] = useState("");
    const [passwordConError, setPasswordConError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [MatchError, setMatchError] = useState("");


    const handleFirstname = (e) => {
        // setFirstnameError(e.target.value);
        if (e.target.value.length < 2) {
            setFirstnameError("First name must be at least 2 characters");
        } else {
            setFirstnameError(" ");
        }
    };
    const handleLastname = (e) => {
        // setLastnameError(e.target.value);
        if (e.target.value.length < 2) {
            setLastnameError("Last name must be at least 2 characters");
        } else {
            setLastnameError(" ");
        }
    };
    const handleEmail = (e) => {
        // setEmailError(e.target.value);
        if (e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters");
        } else {
            setEmailError(" ");
        }
    };

    const passwordhandel = (e) => {
        if (e.target.value.length < 8) {
            setPasswordError("password must be at least 8 characters");
        } else {
            setPasswordError(" ");

            setPassword(e.target.value);
            //console.log(password)
            handlepassword()
        }

    };

    const passwordConhandle = (e) => {
        if (e.target.value.length < 8) {
            setPasswordConError("password must be at least 8 characters");
        } else {
            setPasswordConError(" ");
            setPasswordConform(e.target.value);
            // console.log(passwordCon)
            handlepassword()
        }

    };

    const handlepassword = () => {
        console.log(passwordCon)
        console.log(password)
        if (password !== passwordCon) {
            setMatchError("Password must match");
        }
        else {
            setMatchError(" ");
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

                    <div className="form-group my-2">
                        <label>Password: </label>
                        <input className='form-control' type="password" onChange={passwordhandel} />
                        <p>{
                            passwordError ?
                                <p style={{ color: 'red' }}>{passwordError}</p> :
                                <p></p>
                        }
                        </p>
                    </div>

                    <div className="form-group my-2">
                        <label>Confirm Password: </label>
                        <input className='form-control' type="password" onChange={passwordConhandle} />
                        <p>{
                            passwordConError ?
                                <p style={{ color: 'red' }}>{passwordConError}</p> :
                                <p></p>
                        }
                        </p>
                        <p>{
                            MatchError ?
                                <p style={{ color: 'red' }}>{MatchError}</p> :
                                <p></p>
                        }
                        </p>


                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserForm;
