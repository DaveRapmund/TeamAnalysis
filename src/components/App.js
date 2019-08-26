import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import BackgroundCircle from './BackgroundCircle';
import AddModal from './AddModal';
import ResultModal from './ResultModal';

class App extends Component{
  render(){
    return(
      <div className="container-fluid">
        <BackgroundCircle />
        {this.props.clickedButton !== null && this.props.clickedButton !== 'analyse' ? <CSSTransition in={true} appear={true} timeout={500} classNames="amt"><AddModal /></CSSTransition> : null}
        {this.props.clickedButton === 'analyse' ? <CSSTransition in={true} appear={true} timeout={500} classNames="rmt"><ResultModal /></CSSTransition> : null}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return(
    state
  )
}

export default connect(mapStateToProps)(App);
