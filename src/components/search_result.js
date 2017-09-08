import React from 'react';
import Card from './card';

const SearchResult = (props)=>{    
    const items = Object.keys(props.data).map((key)=>{
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
                <Card title={props.data.policyNumber} items ={items} isSearchResult={true}/>
            </div>
        );
}

export default SearchResult;