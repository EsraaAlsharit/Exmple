import React, { useState } from 'react';
import Navbar from './Navbar';
import FormWrapper from './FormWrapper';

const Wrapper = (props) => {
    
    var [form_wrapper, set_Formwrapper] = useState("");

    console.log(form_wrapper)
    return (
        <div className="">
            
            <Navbar FormWrapper={form_wrapper}/>
            <FormWrapper setFormWrapper={set_Formwrapper}/>
            
        </div>
    );
};

export default Wrapper;
