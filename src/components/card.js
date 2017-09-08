import React, { Component } from 'react';
import CardItem from './card_item';
import fetchPolicy from '../actions';
import { connect } from 'react-redux';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearchResult: props.isSearchResult,
      policyNumber: props.title
    }
  }
<<<<<<< HEAD
  const valueList = props.items.filter(
    (item) => {return !item.name.includes("ID")}
  )
  .map((item) => {
=======

  handleSelect() {
    if (!this.state.isSearchResult) return;

    this.props.fetchPolicy(this.props.title);
  }

  render() {
    if (!this.props || this.props === undefined || this.props === {}) {
      return (<div>Loading...</div>);
    }

    const valueList = this.props.items.filter(
      (item) => !item.name.includes("ID")
    )
    .map((item) => {
      return (
        <CardItem key={item.name} name={item.name} value={item.value}/>
      );
    });

>>>>>>> 4057f245d62ab995bd55f46597a966e7bc38720c
    return (
      <div className = "card" onClick={ this.handleSelect.bind(this)}>
          <h4>{this.props.title}</h4>
          <ul className="unorderdList">
            { valueList }
          </ul>
      </div>
    );
  }
}

export default connect(null, { fetchPolicy })(Card);
