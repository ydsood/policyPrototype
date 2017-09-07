import React,{Component} from 'react';


export default class CardItem extends Component{
    constructor(props){
        super(props);
        
    }

    render(){
        return(
            <li><span>{this.state.name}</span> {this.state.value}</li>
        )
    }
}