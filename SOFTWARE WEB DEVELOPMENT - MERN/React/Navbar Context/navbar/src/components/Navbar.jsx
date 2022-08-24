// import React, { useState } from 'react';

const Navbar = props => {
    
    // const { FormWrapper } = this.props
    // const [Name, setName] = useState(props.Name);
    // const [NavbarContext, setNavbarContext] = useState("");

    return (
        <nav class="d-flex navbar navbar-dark bg-primary text-light justify-content-end ">
            <h4 className='my-4 mx-4'>Hi, {props.FormWrapper}</h4>
        </nav>
    );
};

export default Navbar;
