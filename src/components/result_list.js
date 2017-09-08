import React, {Component} from 'react';
import {connect} from 'redux';
import SearchResult from './search_result';

class ResultList extends Component{
    
    constructor(props={policies:[]}){
        super(props);
        this.state = {policies : props.policies};
    }

    render(){
        let policyList = this.state.policies.map((item)=>{
            console.log(item);
            return <SearchResult data={item} />
        });
        console.log(policyList);
        return(
            <div className="result-list">
                <ul className="unorderedList">
                    {policyList}
                </ul>
            </div>
        );
    }

}

function mapStateToProps(state){
    return {policies : state.policies};
}

export default connect()(ResultList);