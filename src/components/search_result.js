import React from 'react';
import Card from './card';

const SearchResult = (props)=>{    
    const items = Object.keys(props.data).map((key)=>{
        return {name : key, value: props.data[key]};
    });
    console.log(items);
    if(!props.data || !props.data.policyNumber)
        return (
            <Card title="Policy Number" items ={items}/>
        );
    else 
        return (      
            <Card title={props.data.policyNumber} items ={items} isSearchResult={true}/>
        );
}

export default SearchResult;