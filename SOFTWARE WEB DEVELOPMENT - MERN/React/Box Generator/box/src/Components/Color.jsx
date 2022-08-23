import React, { useState } from 'react';
// import ReactDOM from 'react-dom/client';

const Color = (props) => {
    // const myElement;
    const [Color, setColor] = useState("");
    const [Box, setBox] = useState([]);
    const [Height, setHeight] = useState();
    const [Width, setWidth] = useState();

    const createBox = (e) => {
        e.preventDefault();
        Box.push(<div className='m-2 p-5' style={{backgroundColor:Color,color: Color,width: Width+"px", height: Height+"px"}} ></div>)
        
        // const newBox = <div className='m-2 p-5' style={{backgroundColor:Color,color: Color,width: Width+"px", height: Height+"px"}} ></div>
        // setBox([...Box, newBox]);
        setColor("")
        setHeight("")
        setWidth("")

        // const myElement = <div className='w-25  m-5 p-4' style={{backgroundColor:Color,color: Color}} >_</div>
        // const root = ReactDOM.createRoot(document.getElementById('body'));
        // root.render(myElement);

    };

    return (
        <div className="container m-5">
            <div className='mb-5'>
                <form onSubmit={createBox}>
                    <div className=" d-flex justify-content-around align-items-center">
                        <label>Color</label>
                        <div>
                        <input className='form-control' value={Color} type="text" onChange={(e) => setColor(e.target.value)} />
                        </div>
                        <label >Width</label>
                        <div>
                        <input className='form-control' value={Height} type="num" onChange={(e) => setHeight(e.target.value)} />
                        </div>
                        <label >Height</label>
                        <div>
                        <input className='form-control' value={Width} type="num" onChange={(e) => setWidth(e.target.value)} />
                        </div>
                        <input type="submit" className='btn btn-primary' value="Add" />
                    </div>

                </form>
            </div>
            <div id='body' className='d-flex flex-wrap'>
                {Box}
            </div>
        </div>
    );
};

export default Color;
