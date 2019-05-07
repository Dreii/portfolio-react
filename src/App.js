import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Logo from './components/Logo/Logo'
import LoadingBar from './components/LoadingBar/LoadingBar'
import PageTransition from './components/PageTransition/PageTransition'
import EffectsCanvas from './components/EffectsCanvas/EffectsCanvas'
import Helmet from 'react-helmet';

import Home from './pages/Home/Home'


import locations from './constants/locations'

      //transition stages
const STAGING = 0, GROWING = 1, SPREADING = 2
let transitionStage = STAGING
class App extends Component {
  constructor(props){
    super(props)
    this.containerRef = React.createRef()
  }

  state={
    loading: true,
    transitioning: true,
    transitionX: 64,
    transitionY: 64,
    transitionStage: STAGING,
    transitionColor: "#E65151",
    page: null,
    fullScreen: false,
  }

  ChangePage(page, color){
    this.setState({transitionStage: STAGING, transitionColor: color})
    window.setTimeout(()=>this.setState({transitionStage: GROWING}), 200)
    window.setTimeout(()=>this.setState({page}), 1500)
    window.setTimeout(()=>this.containerRef.current.scrollTo(0, 0), 1500)
    window.setTimeout(()=>this.setState({transitionStage: SPREADING, }), 1800)
  }

  componentDidMount(){
    window.setTimeout(()=>{this.setState({transitionStage:GROWING})}, 1000)
    window.setTimeout(()=>{this.setState({loading: false})}, 3000)
    window.setTimeout(()=>{this.setState({
      page: <Home
              ChangePage={(page, color)=>this.ChangePage(page, color)}
              EnterFullScreen={(fsState)=>this.setState({fullScreen: fsState})}
            />,
      transitionStage:SPREADING
    })}, 4000)
  }

  render() {
    let loading = this.state.loading
    return (
      <div id="container" style={{overflowY:this.state.fullScreen ? "hidden": "auto"}} ref={this.containerRef}>
        <Helmet title="Sean Verhaagen Full Stack Javascript Developer In Austin"/>
        <Logo logo={logo} className={loading ? "center":""} ChangePage={(page, color)=>this.ChangePage(page, color)} EnterFullScreen={(fsState)=>this.setState({fullScreen: fsState})}/>
        <PageTransition
          color={this.state.transitionColor}
          stage={this.state.transitionStage}
          startX={this.state.transitionX}
          startY={this.state.transitionY}
        />

        {this.state.page === null ? (
          <LoadingBar color={"white"} y={loading ? window.innerHeight/2-64 : window.innerHeight*2}/>
        ):(
          this.state.page
        )}
      </div>
    )
  }
}

export default App;
