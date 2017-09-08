import React, { Component } from 'react';
import SearchBar from './searchbar';
import PolicyMainPanel from './policy/policy_main_panel';
import ResultList from './result_list';
import {Grid, Row, Col} from 'react-bootstrap';
 
export default class App extends Component {
  render() {
    
    return (
      <div>
        <SearchBar />
        <Grid>
            <Row >
                <Col xs={12} md={8}><PolicyMainPanel /></Col>
                <Col xs={6} md={4}><ResultList  /></Col>
            </Row>
        </Grid>
      </div>
    );
  }
}
