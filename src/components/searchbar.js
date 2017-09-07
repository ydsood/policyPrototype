import React,{Component} from 'react';
import { connect } from 'react-redux';
import { fetchPolicies } from '../actions';

class SearchBar extends Component {
    testing() {
        console.log(this.props);
        this.props.fetchPolicies();
    }

    render() {
        console.log(this.props.fetchPolicies);
        return(
            <form onSubmit={ () => console.log('foo') }>
                <input type='text' onChange={ this.testing.bind(this) }></input>
            </form>
        );
    }
}

export default connect(null, { fetchPolicies })(SearchBar);