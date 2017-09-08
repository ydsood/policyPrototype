import React from 'react';
import Card from '../card';
import {Row, Col} from 'react-bootstrap';


const PolicyTabDetailPanel = (props) =>{
    const list = props.items.map(item =>{
        return <li key={item.title} ><Card title={item.title} items ={item.items}/></li>
    });
    return(
        <div className="left-panel">
            <h4>{props.name}</h4>
            <ul className="unorderdList">
                {list}
            </ul>
        </div>
    )
}

export default PolicyTabDetailPanel;