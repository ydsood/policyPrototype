import React from 'react';
import {Tab, Tabs} from 'react-bootstrap';

const PolicyTabPanel = (props) =>{
    const tabs = props.tabs.map(tab=>{
        return <Tab key={tab.name} eventKey={tab.name} title={tab.name}>{tab.name}</Tab>
    });

    return(
        <Tabs defaultActiveKey={1} animation={false} id="noanim-tab">
            {tabs}
        </Tabs>
    );
}

export default PolicyTabPanel;