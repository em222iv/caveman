import React from 'react';
import Radium from 'radium';

export default Radium(class Dropdown extends React.Component {
  render() {
    return <div style={dropdownStyle.dropdown}>
      <div style={dropdownStyle.title}>
        <a>{this.props.title}</a>
        <img src="http://truenorthdesks.com/wp-content/themes/true-north/images/scroll-down-arrow-icon.png" style={dropdownStyle.icon}/>
      </div>
      {
        this.props.subTargets.subTargets.map(function(target,i) {
          return <div key={target} style={dropdownStyle.subTargetStyle.div}>
            <a href={"#"+target}
              style={dropdownStyle.subTargetStyle.a}>
              {target}
            </a>
          </div>
          })
      }

    </div>
    }
  }
)
var dropdownStyle = {
  dropdown: {
  marginLeft:'20px',
  maxHeight: '20px',
  minWidth:'200px',
  border: '2px solid rgb(121,124,127)',
  fontFamily: 'Helvetica',
  padding: '20px 0px 20px 0px',
  textDecoration: 'none',
  color: 'rgb(121,124,127)',
  transition:' max-height 1s ease',
  ':hover': {
    maxHeight:'600px',
    }
  },
  title: {
    padding:'0 0 10px 20px'
  },
  icon: {
    float: 'right',
    width:'20px',
    paddingRight:'10px'
  },
  subTargetStyle: {
    div: {
        width:'100%',
        padding: '20px 0px 20px 0px',
        transition:' height 0.6s ease',
        ':hover': {
          backgroundColor:'#FFFFFF',
        },
        ':hover > a': {
          color:'#000000'
        }
    },
    a: {
      marginLeft:'20px',
      color:'#FFFFFF',
    }
  }
};
