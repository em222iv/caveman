import React from 'react';
import Button from './components/Button';
import Dropdown from './components/Dropdown';

var contentStyle = {
  backgroundColor: 'rgb(21,25,31)',
  width: "100%",
  height: '100%',
  padding:'50px'
}

export default class App extends React.Component {
  arr() {
    return {
      subTargets: [
        {
          title:"My Brand Portfolio",
          url:"portfolio"
        },
        {
          title:"Best Profile Match",
          url:"profileMatch"
        },
        {
          title:"Highest Earnings",
          url:"earnings"
        },
        {
          title:"Date Addded",
          url:"added"
        }
      ]
    };
  }
  render() {
    return (
      <div className="content" style={contentStyle}>
        <Button title="View Brand" target="AwesomeBrand"/>
        <Dropdown title="Sort By" subTargets={this.arr()}/>
      </div>
    )
  }
}
