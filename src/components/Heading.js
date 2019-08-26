import React from 'react';
import { CSSTransition } from 'react-transition-group';

function Heading(){
  return(
    <div className="row heading-row mb-3">
      <div className="col text-center text-white heading">
        <CSSTransition in={true} appear={true} timeout={700} classNames="tt">
          <h2>Pokémon Team Analysis</h2>
        </CSSTransition>
        <CSSTransition in={true} appear={true} timeout={800} classNames="stt">
          <h5><i>Select your current team to get started</i></h5>
        </CSSTransition>
      </div>
    </div>
  )
}

export default Heading;
