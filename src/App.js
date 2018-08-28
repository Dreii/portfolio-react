import React, { Component } from 'react'
// import logo from './logo.svg';
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import Work from './pages/Work/Work'
import Blog from './pages/Blog/Blog'
import About from './pages/About/About'

import locations from './constants/locations'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      location: locations.WORK
    }
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Navigation location={this.state.location} setLocation={(loc)=>this.setState({location: loc})}/>
        
        <Work location={this.state.location} />
        <Blog location={this.state.location} />
        <About location={this.state.location} />
      </div>
    );
  }
}

// function routing(){
//
// }

export default App;
