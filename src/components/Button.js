import React from 'react';
import Radium from 'radium';

export default Radium(class Button extends React.Component {
    targetUrl() {
      return this.props.target;
    }
    render() {
      return  <a
      href={"#"+this.targetUrl()}
      style={buttonStyle}
      >{this.props.title}</a>

    }
  }
)
var buttonStyle = {
  float: 'left',
  maxHeight:'20px',
  border: '2px solid rgb(121,124,127)',
  fontFamily: 'Helvetica',
  padding: '20px 30px 20px 30px',
  textDecoration: 'none',
  color: '#FFFFFF',
  textTransform: 'uppercase',
  backgroundImage: 'linear-gradient(to bottom,rgb(28,32,38) 59px,#FFFFFF 60px,#FFFFFF 100%)',
  backgroundPosition: '0 0',
  backgroundSize:'100% 200%',
	transition: 'all 0.6s linear',
  ':hover': {
    color:'#000000',
    backgroundPosition: '0 -59px'
  },
  ':active': {
    color: '#FFFFFF',
    backgroundPosition: '0 0',
    transition: 'all 0.1s linear',
    border: '2px solid rgb(216,216,217)',
  }
};
