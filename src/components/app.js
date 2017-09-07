import React, { Component } from 'react';
import SearchBar from './searchbar';
import PolicyMainPanel from './policy/policy_main_panel';

export default class App extends Component {
  render() {
    return (
      <div>
        React simple starter
        <SearchBar />
        <PolicyMainPanel />
      </div>
    );
  }
}
