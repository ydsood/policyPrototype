import React from 'react';
import Card from '../card';


const PolicyLeftPanel = (props) =>{
    const list = props.items.map(item =>{
        return <li key={item.title} ><Card title={item.title} items ={item.items}/></li>
    });
    return(
        <div className="left-panel">
            {list}
        </div>
    )
}

export default PolicyLeftPanel;