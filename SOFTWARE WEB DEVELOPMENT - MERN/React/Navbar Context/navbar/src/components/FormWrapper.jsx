// import React, { useState } from 'react';

const FormWrapper = props => {
    
    // const [Name, setName] = useState("");
    // const [FormWrapperContext, setFormWrapperContext] = useState("");

    // const { setFormWrapper } = this.props
    const Handle= (e) => {
        
        // setFormWrapper
        console.log(e.target.value)
        props.setFormWrapper(e.target.value);
        // setFormWrapper();
    };

    return (
        <div className="container my-5">
            <form class="form-inline d-flex align-items-center">
            <label className='mx-2'>Your Name:</label>
            <div className='w-50'>
            <input type="text" class="form-control" onChange={Handle}/>
            </div>
            
            
            </form>
        </div>
    );
};

export default FormWrapper;
