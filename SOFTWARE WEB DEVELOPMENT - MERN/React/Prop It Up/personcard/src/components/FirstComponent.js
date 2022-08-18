import React, { Component } from 'react'

class FirstComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            position: false
        }
    }


    render() {

        const { fname, lname, HairColor, age } = this.props
        return (
            <>
                <div className=''>
                    <h1>{fname}, {lname}</h1>
                    <p>Age: {age}</p>
                    <p>Hair Color:{HairColor}</p>
                </div>

            </>
        );
    }

}
export default FirstComponent;