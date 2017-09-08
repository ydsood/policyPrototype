import React from 'react';
import PolicyTabDetailPanel from './policy_tab_detail_panel';
import {Tab, Tabs, NavDropdown, Row, Col, Nav, NavItem, MenuItem} from 'react-bootstrap';

const PolicyMiddlePanel = (props) =>{
    const tabsData = props.data.tabs;
    const tabItems = props.data.items;
    const firstTabsLength = Math.min(3, tabsData.length)
    const firstTabs = tabsData.slice(0, firstTabsLength).map(item => {
        return (
            <NavItem eventKey={ item.name }>
                {item.name}
            </NavItem>
        );
    });

    const dropdownItems = tabsData.slice(firstTabsLength).map(tab => {
        return <MenuItem eventKey={ tab.name }>{ tab.name }</MenuItem>;
    });

    const dropDownTab = <NavDropdown title='Additional Options'>{ dropdownItems }</NavDropdown>;
    const tabContents = tabsData.map(tab => {
        return (
            <Tab.Pane eventKey={ tab.name }>
                <PolicyTabDetailPanel name={ tab.name } items= {tabItems} />
            </Tab.Pane>
        );
    })

    return(
        <Tab.Container defaultActiveKey= {tabsData[0].name} id='noanim-tab'>
            <Row className='clearfix'>
                <Col sm={12}>
                    <Nav bsStyle='tabs'>
                        {firstTabs}
                        {dropDownTab}
                    </Nav>
                </Col>
                <Col sm={12}>
                    <Tab.Content animation>
                        {tabContents}
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
}

export default PolicyMiddlePanel;