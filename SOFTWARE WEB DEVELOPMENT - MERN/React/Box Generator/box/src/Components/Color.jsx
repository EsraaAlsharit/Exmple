import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const Color = (props) => {

    const [Color, setColor] = useState("");
    const Boxs = []

    const createBox = (e) => {
        e.preventDefault();
        const color = <div style="background-color:{Color}" >{Color}</div>
        Boxs.push(color);

        // return props.Boxs.map((item) => {
        //     return 
        // });
    };



    return (
        <div className="container m-5">
            <div>
                <form onSubmit={createBox}>
                    <div className=" d-flex justify-content-around align-items-center">
                        <label>Color</label>
                        <div className='w-75'>
                        <input className='form-control' type="text" onChange={(e) => setColor(e.target.value)} />
                        </div>
                        <input type="submit" className='btn btn-primary' value="Add" />
                    </div>

                </form>
            </div>
            <div>
                {Boxs}
            </div>
        </div>
    );
};

export default Color;
