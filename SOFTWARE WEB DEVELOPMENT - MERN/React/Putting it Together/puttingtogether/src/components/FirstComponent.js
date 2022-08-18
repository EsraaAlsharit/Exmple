import React, { Component } from 'react'

class FirstComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newAge: this.props.age
        }
    }

    Birthday = () => {
        this.setState({
            newAge: this.state.newAge + 1
        });
    }

    render() {

        const { fname, lname, HairColor, age } = this.props
        return (
            <>
                <div className=''>
                    <h1>{fname}, {lname}</h1>
                    <p>Age: {this.state.newAge}</p>
                    <p>Hair Color:{HairColor}</p>
                </div>
                <button onClick={this.Birthday}>Birthday Button for {lname} {fname}</button>
            </>
        );
    }

}
export default FirstComponent;