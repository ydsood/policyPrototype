import React from 'react';
import Card from '../card';


const PolicyTagDetailPanel = (props) =>{
    return(
        <div>
            <Card key="1" title="title" items ={[{name : "asdh", value : "asjdhj"}, {name : "sadsd", value : "ewre"}]}/>
            <Card key="2" title="title1" items ={[{name : "asdh2", value : "asjdhj4"}, {name : "sadsd2", value : "ewr4e"}]}/>
            <Card key='3' title="title2" items ={[{name : "asdh3", value : "asjdhj4"}, {name : "sadsd2", value : "ew1re"}]}/>
        </div>
    )
}

export default PolicyTagDetailPanel;