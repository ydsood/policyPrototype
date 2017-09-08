import React from 'react';
import PolicyTabDetailPanel from './policy_tab_detail_panel';
import PolicyTabPanel from './policy_tab_panel';
import {Tab, Tabs} from 'react-bootstrap';

const PolicyMiddlePanel = (props) =>{
<<<<<<< HEAD
    const tabsData = props.data[0].tabs;
    const tabItems = props.data[0].items;
=======
    const tabsData = props.data.tabs;
    const tabItems = props.data.items;
    //console.log(tabsData);
>>>>>>> 4057f245d62ab995bd55f46597a966e7bc38720c
    const tabs = tabsData.map(tab=>{
        return (
            <Tab key={tab.name} eventKey={tab.name} title={tab.name}>
                <PolicyTabDetailPanel name={tab.name} items={tabItems}/>
            </Tab>
        )
    });
<<<<<<< HEAD
=======
    //console.log(tabs);
>>>>>>> 4057f245d62ab995bd55f46597a966e7bc38720c
    return(
        <Tabs defaultActiveKey={tabs[0].name} animation={false} id="noanim-tab">
            {tabs}
        </Tabs>
    );
}

export default PolicyMiddlePanel;