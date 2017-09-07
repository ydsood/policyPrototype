import React from 'react';
import Card from '../card';


const PolicyTabDetailPanel = (props) =>{
    const list = props.items.map(item =>{
        return <li key={item.title} ><Card title={item.title} items ={item.items}/></li>
    });
    return(
        <div className="left-panel">
            <h4>{props.name}</h4>
            {list}
        </div>
    )
}

export default PolicyTabDetailPanel;