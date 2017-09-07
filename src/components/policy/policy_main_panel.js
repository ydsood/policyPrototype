import React,{Component} from 'react';
import PolicyLeftPanel from './policy_left_panel';
import PolicyMiddlePanel from './policy_middle_panel';
import {Grid,Row,Col} from 'react-bootstrap';


const PolicyMainPanel = (props) =>{
    const leftItems = [{title:'test', items:[{name:'name',value:'value'},{name:'name1',value:'value1'}]},
    {title:'test2', items:[{name:'name3',value:'value3'},{name:'name5',value:'value5'}]},
    {title:'test3', items:[{name:'name2',value:'value2'},{name:'name4',value:'value4'}]}];

    const middleItems ={tabs:[{name:'tab1'},{name:'tab2'},{name:'tab3'},{name:'tab4'},{name:'tab5'}],
    items:leftItems};
    return(
        <Grid>
            <Row className="show-grid">
                <Col xs={6} md={4}><PolicyLeftPanel items={leftItems}/></Col>
                <Col xs={12} md={8}><PolicyMiddlePanel data={middleItems} /></Col>
            </Row>
      </Grid>
    )
}

export default PolicyMainPanel;