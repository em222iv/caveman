import React from 'react';
import Button from './components/Button';
import Dropdown from './components/Dropdown';

const dropDownStructure = {
  /*
    The dropdown structure is built upon array > objects
    Structure:
      title: "link title"
      state: "name of state to set"
  */
  dropdownLinks: [
    {
      title:"My Brand Portfolio",
      state:"portfolio"
    },
    {
      title:"Best Profile Match",
      state:"profileMatch"
    },
    {
      title:"Highest Earnings",
      state:"earnings"
    },
    {
      title:"Date Addded",
      state:"added"
    }
  ]
};
export default class App extends React.Component {
  //example of usage with state change
  constructor(props) {
    super(props);
    this.state = { page: 'Dashboard' };
  }
  stateChangeCallBack(pageState) {
     this.setState({ page: pageState });
     console.log(pageState);
  }
  //Button component takes title and onCLick callback
  //Dropdown component takes title, onClick callback and structure array
  render() {
    return (
      <div className="content" style={contentStyle}>
        <div style={contentStyle.div1}>
          <Button title="View Brand" onClick={(page) => this.stateChangeCallBack('someBrand')} />
        </div>
        <div  style={contentStyle.div2}>
          <Dropdown title="Sort By" onClick={(pageState) => this.stateChangeCallBack(pageState)} subTargets={dropDownStructure} />
        </div>
      </div>
    )
  }
}
let contentStyle = {
  position:'absolute',
  backgroundColor: 'rgb(21,25,31)',
  width: "100%",
  height: '100%',
  div1: {
    width:'200px',
    padding:'50px'
  },
  div2: {
    width:'200px',
    padding:'50px'
  }
}
