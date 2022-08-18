import React, { useState } from 'react';

const UserForm = (props) => {
    const [fname, setFirstname] = useState("");
    const [Firstname, setFirstnameError] = useState("");
    const handleFirstname = (e) => {
        setFirstname(e.target.value);
        if (e.target.value.length < 1) {
            setFirstname("Title is required!");
        } else if (e.target.value.length < 3) {
            setFirstname("Title must be 3 characters or longer!");
        }
    };
    const [lname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCon, setPasswordConform] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { fname, lname, email, password, passwordCon };
        console.log("Welcome", newUser);
        setHasBeenSubmitted(true);
    };



    const formMessage = () => {
        if (hasBeenSubmitted) {
            return "Thank you for submitting the form!";
        } else {
            return "Welcome, please submit the form";
        }
    };

    return (
        <div className="container m-5">
            <div>
                <form onSubmit={createUser}>

                    <div className="form-group my-2">
                        <label>First Name: </label>
                        <input className='form-control' type="text" onChange={handleFirstname} />
                        {
                            Firstname ?
                                <p style={{ color: 'red' }}>{Firstname}</p> :
                                ''
                        }
                    </div>
                    <div className="form-group my-2">
                        <label>Last Name: </label>
                        <input className='form-control' type="text" onChange={(e) => setLastname(e.target.value)} />
                        {
                            hasBeenSubmitted ?
                                <p>Thank you for submitting the form!</p> :
                                <p>Welcome, please submit the form.</p>
                        }
                    </div>
                    <div className="form-group my-2">
                        <label>Email Address: </label>
                        <input className='form-control' type="text" onChange={(e) => setEmail(e.target.value)} />
                        {
                            hasBeenSubmitted ?
                                <p>Thank you for submitting the form!</p> :
                                <p>Welcome, please submit the form.</p>
                        }
                    </div>
                    <div className="form-group my-2">
                        <label>Confirm Password: </label>
                        <input className='form-control' type="password" onChange={(e) => setPasswordConform(e.target.value)} />
                        {
                            hasBeenSubmitted ?
                                <p>Thank you for submitting the form!</p> :
                                <p>Welcome, please submit the form.</p>
                        }
                    </div>
                    <div className="form-group my-2">
                        <label>Password: </label>
                        <input className='form-control' type="password" onChange={(e) => setPassword(e.target.value)} />
                        {
                            hasBeenSubmitted ?
                                <p>Thank you for submitting the form!</p> :
                                <p>Welcome, please submit the form.</p>
                        }
                    </div>
                    <input type="submit" value="Create User" />
                </form>
            </div>
        </div>
    );
};

export default UserForm;
