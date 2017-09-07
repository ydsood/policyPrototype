import React, {Component} from 'react';
import {connect} from 'react-redux';
import SearchResult from './search_result';

class ResultList extends Component{
    
    constructor(props={policies:[]}){
        super(props);
        this.state = {policies : props.policies};
    }

    render(){
        //console.log(props);
        let policyList = this.state.policies.map((item)=>{
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
export default connect(mapStateToProps)(ResultList);
>>>>>>> 6b8e34c314d0c106653246571481f019c9345ed3
