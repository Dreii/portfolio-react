import React, { Component } from 'react';
import './WorkEntry.css'

class WorkEntry extends Component {
  constructor(props){
    super(props)
    this.state = {open: false}
  }

  render() {
    let {name, image, message} = this.props
    return (
      <div className={"WorkEntry"+(this.state.open ? " open": "")}>
        <div className="image" style={{backgroundImage:`url(${image})`}}>
          <div className="overlay"></div>
        </div>
        <h3>{name}</h3>

        <button className="toggleOpen" onClick={()=>this.setState({open: !this.state.open})}>
          <i className="fas fa-angle-down"></i>
        </button>
        <div className="message">
          <p>
            {message}
          </p>
        </div>
      </div>
    )
  }
}

export default WorkEntry;
