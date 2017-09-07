import React, { Component } from 'react';
import SearchBar from './searchbar';
import PolicyMainPanel from './policy/policy_main_panel';
import ResultList from './result_list';

export default class App extends Component {
  render() {
    const policies = [
              {
                  _Self : "/resources/Policy/Conv_WL_Values_TC01",
                  policyNumber : "Conv_TL_Values_TC01",
                  name : "Jimmy  Myi_Conv1",
                  status : "Active",
                  issueAge : "65",
                  dateOfBirth : "1947-01-07T00:00:00",
                  governmentId : "414287567",
                  lineOfBusiness : "Traditional Life",
                  applicationReceivedDate : "1900-01-01T00:00:00"
              },
              {
                  _Self : "/resources/Policy/Conv_WL_Values_TC02",
                  policyNumber : "Conv_WL_Values_TC02",
                  name : "Jimmy  Myi_Conv2",
                  status : "Pending",
                  issueAge : "65",
                  dateOfBirth : "1947-01-07T00:00:00",
                  governmentId : "414287567",
                  lineOfBusiness : "Whole Life",
                  applicationReceivedDate : "1900-01-01T00:00:00"
              },
              {
                  _Self : "/resources/Policy/Conv_WL_Values_TC03",
                  policyNumber : "Conv_TL_Values_TC01",
                  name : "Jimmy  Myi_Conv3",
                  status : "Active",
                  issueAge : "65",
                  dateOfBirth : "1947-01-07T00:00:00",
                  governmentId : "414287567",
                  lineOfBusiness : "Traditional Life",
                  applicationReceivedDate : "1900-01-01T00:00:00"
              }
          ];
    return (
      <div>
        <SearchBar />
        <PolicyMainPanel />
        <ResultList policies = {policies} />
      </div>
    );
  }
}
