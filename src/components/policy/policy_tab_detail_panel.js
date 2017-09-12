import React from 'react';
import Card from '../card';
import {Row, Col} from 'react-bootstrap';


const PolicyTabDetailPanel = (props) =>{
    const list = props.items.map((item)=>{
        return  <Col xs={6} md={6}><Card title={item.title} items ={item.items}/></Col>;
    })

    return(
        <div className="left-panel">
            <h4>{props.name}</h4>           
            {list}
        </div>
    )
}

export default PolicyTabDetailPanel;