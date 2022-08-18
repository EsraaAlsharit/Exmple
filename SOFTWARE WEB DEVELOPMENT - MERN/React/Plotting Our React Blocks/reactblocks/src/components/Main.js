import React, { Component } from 'react'
import './style.css';
import SubContents from './SubContents';
import Advertisement from './Advertisement';

class Main extends Component {

    render() {


        return (
            <div className='main'>
                <div class="row">
                    <SubContents />
                    <SubContents />
                    <SubContents />
                </div>
                <Advertisement />
            </div>
        );
    }

}
export default Main;