import React from 'react';
import { connect } from 'react-redux';

function Weakness(props){
  return(
    <p>Your current team has some weaknesses against <b>{props.weaknesses}</b>-types, so you might want to look into that.</p>
  )
}

const mapStateToProps = state => {
  return{
    weaknesses: state.currentWeaknesses
  }
}

export default connect(mapStateToProps)(Weakness);
