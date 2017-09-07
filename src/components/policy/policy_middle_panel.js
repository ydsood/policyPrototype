import React from 'react';
import PolicyTabDetailPanel from './policy_tab_detail_panel';
import PolicyTabPanel from './policy_tab_panel';


const PolicyMiddlePanel = (props) =>{
    const tabs = props.data.tabs;
    const tabItems = props.data.items;
    return(
        <div>
            <PolicyTabPanel tabs={tabs}/>
            <PolicyTabDetailPanel items={tabItems}/>
        </div>
    )
}

export default PolicyMiddlePanel;

