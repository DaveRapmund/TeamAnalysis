import React, { Component } from 'react';
import { connect } from 'react-redux';

import { analyseButtonClicked } from '../actions/modalActions';
import { analyseTypes } from '../actions/analyseTypes';

class AnalyseButton extends Component{

  retrieveTypes = () => {
    this.types = []
    for(let key in this.props.team){
      for(let i = 0; i < this.props.team[key][0].length; i++){
        this.types.push(this.props.team[key][0][i].slice(25))
      }
    }
  }

  render(){
    return(
      <div className="row analyse-button">
      <div className="col text-center">
      <button onClick={() => {
        if(Object.keys(this.props.team) != 0){
          this.retrieveTypes()
          this.props.analyseTypes(this.types);
          this.props.analyseButtonClicked('analyse')
        }
      }}
      className="btn btn-info">Analyse Team</button>
      </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    team: state.currentTeam
  }
}

export default connect(mapStateToProps, { analyseButtonClicked, analyseTypes })(AnalyseButton);
