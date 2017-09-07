import React, {Component} from 'react';
import {connect} from 'react-redux';
import SearchResult from './search_result';

class ResultList extends Component{
    
    constructor(props={policies:[]}){
        console.log(props);
        super(props);
        this.state = {policies : props.policies};
    }

    render(){
        console.log(this.props);
        let policyList = this.props.policies.map((item)=>{
            console.log(item);
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

<<<<<<< HEAD
export default connect(mapStateToProps, {})(ResultList);
=======
export default connect(mapStateToProps, {})(ResultList);
>>>>>>> f4e0def27446c5c683cfec505b1b9e01101fdec0
