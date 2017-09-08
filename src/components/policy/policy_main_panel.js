import React,{Component} from 'react';
import PolicyLeftPanel from './policy_left_panel';
import PolicyMiddlePanel from './policy_middle_panel';
import {Grid,Row,Col,Clearfix} from 'react-bootstrap';
import {connect} from 'react-redux';


const PolicyMainPanel = (props) =>{
    const leftItemFilter = ["owner","mailingAddress","history","insured"];
    const middleItemFilter =["billing","policyLoanValues","policyBenefitValues","policyCashValues","fundResults"];
  
    const middleItems = Object.keys(props.activePolicy)
    .filter((item)=>{
       return (middleItemFilter.includes(item) && props.activePolicy[item] != null)
    })
    .map((item)=>{
        return{
            title:item,
            items:Object.keys(props.activePolicy[item]).map((key)=>{
                return {name : key, value: props.activePolicy[item][key]};
            })
        }
    });

    const middleData = {
        items:middleItems,
        tabs:Object.keys(props.activePolicy["tabs"]).map((key)=>{
            return {name:key,value:props.activePolicy["tabs"][key]}
        })
    }
    const leftItems = Object.keys(props.activePolicy)
    .filter((item)=>{
        return (leftItemFilter.includes(item) && props.activePolicy[item] != null)
    })
    .map((item)=>{
        return{
            title:item,
            items:Object.keys(props.activePolicy[item]).map((key)=>{
                    return {name : key, value: props.activePolicy[item][key]};
                })
        }
    });

    return(
    <div className = "policy-main-panel">
        <Row className="show-grid">
            <Col xs={6} md={4}><PolicyLeftPanel items={leftItems}/></Col>
            <Col xs={12} md={8}><PolicyMiddlePanel data={middleData} /></Col>
            
        </Row>
    </div>
    )
}



function mapStateToProps(state){
    //Whatever is returned will show up as props inside of BookList
    if(Object.keys(state.activePolicy).length === 0){
       
        return{
            activePolicy:{
                "owner":{
                    "FullName":"William Shakespeare","BirthDate":"1960-06-06","Gender":"Male"
                },
                "mailingAddress":{"AddressType":"Home"},
                "policyCashValues":{"total":1532.25,"faceAmount":126321,"grossSurrenderCharge":158332},
                "policyBenefitValues":{"total1":142.25,"faceAmount1":12521,"grossSurrenderCharge":15632},
                "tabs":{
                    "Coverages":"/resources/Policy/NBA_Deferred1/Coverages",
                    "Transactions": "/resources/Policy/NBA_Deferred1/Transactions",
                    "Roles": "/resources/Policy/NBA_Deferred1/Roles",
                    "Notes": "/resources/Policy/NBA_Deferred1/Notes",
                    "Commissions": "/resources/Policy/NBA_Deferred1/Commissions",
                    "PolicyAddress": "/resources/Policy/NBA_Deferred1/PolicyAddress"
                }
            }
        };
    }
    console.log(state.activePolicy);
    return{
        activePolicy:state.activePolicy
    };
    
}

export default connect(mapStateToProps)(PolicyMainPanel);