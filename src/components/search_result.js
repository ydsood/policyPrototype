import React from 'react';
import Card from './card';

const SearchResult = (props)=>{
    console.log(props);
    const items = Object.keys(props).map((key)=>{
        return {name : key, value: props[key]};
    });
    
    return (
        <Card title={props.policyNumber} items ={items}/>
    );
}

export default SearchResult;