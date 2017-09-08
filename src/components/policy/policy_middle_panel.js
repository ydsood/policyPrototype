import React from 'react';
import PolicyTabDetailPanel from './policy_tab_detail_panel';
import PolicyTabPanel from './policy_tab_panel';
import {Tab, Tabs} from 'react-bootstrap';

const PolicyMiddlePanel = (props) =>{
    const tabsData = props.data[0].tabs;
    const tabItems = props.data[0].items;
    const tabs = tabsData.map(tab=>{
        return (
            <Tab key={tab.name} eventKey={tab.name} title={tab.name}>
                <PolicyTabDetailPanel name={tab.name} items={tabItems}/>
            </Tab>
        )
    });
    return(
        <Tabs defaultActiveKey={tabs[0].name} animation={false} id="noanim-tab">
            {tabs}
        </Tabs>
    );
}

export default PolicyMiddlePanel;