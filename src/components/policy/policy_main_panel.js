import React,{Component} from 'react';
import PolicyLeftPanel from './policy_left_panel';
import PolicyTag from './policy_tag';
import PolicyTagDetailPanel from './policy_tag_detail_panel';


const PolicyMainPanel = (props) =>{

    return(
        <div >
            <div>
                <PolicyLeftPanel />
            </div>
            <div>
                <PolicyTagDetailPanel />
            </div>
      </div>
    )
}

export default PolicyMainPanel;