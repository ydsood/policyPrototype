import React,{Component} from 'react';
import { connect } from 'react-redux';
import { fetchPolicies } from '../actions';
import { Button, FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

class SearchBar extends Component {
    render() {
        return(
            <form
                className='searchbar' 
                onSubmit={ this.props.fetchPolicies() }>
                <FormGroup>
                    <InputGroup>
                        <FormControl type='text' placeholder='search'/>
                        <InputGroup.Button>
                            <Button 
                                type='submit'
                                bsStyle='primary'>
                                Search
                            </Button>
                        </InputGroup.Button>                      
                    </InputGroup>
                </FormGroup>
            </form>
        );
    }
}

export default connect(null, { fetchPolicies })(SearchBar);