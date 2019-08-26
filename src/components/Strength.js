import React from 'react';
import { connect } from 'react-redux';

function Strength(props){
  return(
    <div>
      <p>It also contains members that are effective against <b>{props.strengths}</b>-types though, so that's great!</p>
    </div>
  )
}

const mapStateToProps = state => {
  return{
    strengths: state.currentStrengths
  }
}

export default connect(mapStateToProps)(Strength);
