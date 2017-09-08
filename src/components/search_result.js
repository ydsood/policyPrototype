import React from 'react';
import Card from './card';
import _ from 'lodash';

const SearchResult = (props)=>{    
    //only display limited properties in search results
    var reducedObj = _.pick(props.data, ['policyNumber', 'name', 'status'])
    
    const items = Object.keys(reducedObj).map((key)=>{
        return {name : key, value: props.data[key]};
    });
    //console.log(items);
    if(!props.data || !props.data.policyNumber)
        return (
            <div className="search-result"> 
                <Card title="Policy Number" items ={items}/>
            </div>
            
        );
    else 
        return (
            <div className="search-result">    
                <Card key={props.data.policyNumber} title={props.data.policyNumber} items ={items} isSearchResult={true}/>
            </div>
        );
}

export default SearchResult;