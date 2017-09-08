import React, {Component} from 'react';
import {connect} from 'react-redux';
import SearchResult from './search_result';
import { fetchPolicies } from '../actions';

class ResultList extends Component{
    
    constructor(props={policies:[]}){
        console.log(props);
        super(props);
        this.state = {policies : props.policies};
        console.log(this.state);
    }

    render(){
        const policies = [
            {
                _Self : "/resources/Policy/Conv_WL_Values_TC01",
                policyNumber : "Conv_TL_Values_TC01",
                name : "Jimmy  Myi_Conv1",
                status : "Active",
                issueAge : "65",
                dateOfBirth : "1947-01-07T00:00:00",
                governmentId : "414287567",
                lineOfBusiness : "Traditional Life",
                applicationReceivedDate : "1900-01-01T00:00:00"
            },
            {
                _Self : "/resources/Policy/Conv_WL_Values_TC02",
                policyNumber : "Conv_WL_Values_TC02",
                name : "Jimmy  Myi_Conv2",
                status : "Pending",
                issueAge : "65",
                dateOfBirth : "1947-01-07T00:00:00",
                governmentId : "414287567",
                lineOfBusiness : "Whole Life",
                applicationReceivedDate : "1900-01-01T00:00:00"
            },
            {
                _Self : "/resources/Policy/Conv_WL_Values_TC03",
                policyNumber : "Conv_TL_Values_TC01",
                name : "Jimmy  Myi_Conv3",
                status : "Active",
                issueAge : "65",
                dateOfBirth : "1947-01-07T00:00:00",
                governmentId : "414287567",
                lineOfBusiness : "Traditional Life",
                applicationReceivedDate : "1900-01-01T00:00:00"
            }
        ];
        let policyList;
        if(!this.props.policies || this.props.policies.length == 0 )
            policyList = policies.map((item)=>{
                //console.log(item);
                return <SearchResult data={item} />
            });
        //console.log(this.props);
       else
             policyList = this.props.policies.map((item)=>{
                //console.log(item);
                return <SearchResult data={item} />
            });
        //console.log(policyList);
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


export default connect(mapStateToProps, {fetchPolicies})(ResultList);