import React, { useState } from 'react';

const UserForm = (props) => {
    const [fname, setFirstname] = useState("");
    const [lname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCon, setPasswordConform] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { fname, lname, email, password, passwordCon };
        console.log("Welcome", newUser);
    };

    return (
        <div className="container m-5">
            <div>
                <form onSubmit={createUser}>
                    <div className="form-group my-2">
                        <label>First Name: </label>
                        <input className='form-control' type="text" onChange={(e) => setFirstname(e.target.value)} />
                    </div>
                    <div className="form-group my-2">
                        <label>Last Name: </label>
                        <input className='form-control' type="text" onChange={(e) => setLastname(e.target.value)} />
                    </div>
                    <div className="form-group my-2">
                        <label>Email Address: </label>
                        <input className='form-control' type="text" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group my-2">
                        <label>Password: </label>
                        <input className='form-control' type="password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="form-group my-2">
                        <label>Confirm Password: </label>
                        <input className='form-control' type="password" onChange={(e) => setPasswordConform(e.target.value)} />
                    </div>
                    {/* <input type="submit" className='btn btn-primary' value="Create User" /> */}
                </form>
            </div>
            <div>
                <table className='table my-5'>
                    <tr>
                        <td>
                            First Name
                        </td>
                        <td>{fname}</td>
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td>{lname}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{email}</td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td>{password}</td>
                    </tr>
                    <tr>
                        <td>Confirm Password</td>
                        <td>{passwordCon}</td>
                    </tr>
                </table>

                
            </div>
        </div>
    );
};

export default UserForm;
