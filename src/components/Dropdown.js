import React from 'react';
import Radium from 'radium';

export default Radium(class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: dropdownStyle.nonehover };
  }
  onEnter() {
    this.setState({ hover: dropdownStyle.onhover });
  }
  onLeave() {
     this.setState({ hover: dropdownStyle.nonehover });
  }
  render() {
    return <div onMouseEnter={this.onEnter.bind(this)} onMouseLeave={this.onLeave.bind(this)} style={dropdownStyle.dropdown}>
      <div style={dropdownStyle.dropdown.title}>
        <a>{this.props.title}</a>
        <img src={this.state.hover.icon} style={dropdownStyle.dropdown.icon}/>
      </div>
      <div style={this.state.hover}>
      {
        this.props.subTargets.dropdownLinks.map((target) => {
          return <div onClick={() => this.props.onClick(target.state)} style={dropdownStyle.subTargets.div} key={"div-"+target.state}>
              <a href="#" key={"a-"+target.state} style={dropdownStyle.subTargets.a}>
                {target.title}
              </a>
            </div>
          })
        }
        </div>
    </div>
    }
  }
)
let dropdownStyle = {
  nonehover: {
    visibility: 'hidden',
    opacity: '0',
    transition: 'visibility 0.5s, opacity 0.5s linear',
    icon: "http://coursee.co/wp-content/uploads/2015/11/arrow-down@2x.png"
  },
  onhover:  {
    visibility: 'visible',
    opacity: '1',
    transition: 'visibility 0.5s, opacity 1s linear',
    icon: "http://static.tumblr.com/0388b0751608a5a464b37aeca755d882/sd808np/bBenvcwxu/tumblr_static_a37o2772gsw8ssg08swkkw884.png"
  },
  dropdown: {
    float: 'left',
    maxHeight: '38px',
    minWidth:'200px',
    backgroundColor:'rgb(28,32,38)',
    border: '2px solid rgb(121,124,127)',
    fontFamily: 'Helvetica',
    padding: '20px 0px 0px 0px',
    textDecoration: 'none',
    color: 'rgb(121,124,127)',
    transition:' max-height 1s ease',
    ':hover': {
      maxHeight:'600px',
    },
    title: {
      padding:'0 0 10px 20px'
    },
    icon: {
      float: 'right',
      width:'30px',
      paddingRight:'10px',
    },
  },
  subTargets: {
    div: {
      minWidth:'100%',
      transition:' color 0.6s ease',
      ':hover': {
        backgroundColor:'#FFFFFF',
      }
    },
    a: {
      marginLeft:'20px',
      padding: '15px 0px 20px 0px',
      display:'block',
      minWidth:'100%',
      textDecoration:'none',
      color:'#FFFFFF',
      transition:' color 0.6s ease',
      ':hover': {
        color:'#000000',
      }
    }
  }
}
