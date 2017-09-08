import React,{Component} from 'react';


const CardItem = (props) =>{
    if(props === null || props === undefined){
        return (<li>nothing</li>);
    }
    const name = props.name;
    const value = props.value;
    return(
        <li key={name}><b>{name}</b>:{value}</li>
    );
}

export default CardItem;