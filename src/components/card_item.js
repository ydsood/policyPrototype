import React,{Component} from 'react';


const CardItem = (props) =>{
    if(props === null || props === undefined){
        return (<li>nothing</li>);
    }
    //console.log(props);
    const name = props.name;
    const value = props.value;
    return(
        <li key={name}>{name}:{value}</li>
    );
}

export default CardItem;