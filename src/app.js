import React from 'react';
import Button from './components/Button';
import Dropdown from './components/Dropdown';

var contentStyle = {
  backgroundColor: 'rgb(21,25,31)',
  width: "100%",
  height: '100%',
  padding:'50px',
  display:'flex'
}

export default class App extends React.Component {
  arr() {
    return { subTargets: ["My Brand Portfolio","Best Profile Match", "Highest Earnings", "Date Addded"] };

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
