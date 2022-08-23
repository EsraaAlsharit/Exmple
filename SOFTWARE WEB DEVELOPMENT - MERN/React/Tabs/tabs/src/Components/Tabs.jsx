import React from 'react';
import { useState } from 'react';


const Tabs = (props) => {

    const [tabs] = useState(["Tab 1 content is showing here","Tab 2 content is showing here","Tab 3 content is showing here"]);
    const [tab, setTab] = useState('');

    
    const TabOpen = (e) => {
        setTab(tabs[e.target.value])
    }
      return (
        <div className="container m-5">
            <ul class="nav nav-tabs " id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link " id="tab1" onClick={TabOpen} value="0">Tab1</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="tab2" onClick={TabOpen} value="1">Profile</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="tab3" onClick={TabOpen} value="2">Contact</button>
                </li>
            </ul>
            <div class="tab-content p-5" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">{tab}</div>
            </div>
        </div>
      );
    };
export default Tabs