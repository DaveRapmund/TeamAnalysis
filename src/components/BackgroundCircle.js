import React from 'react';
import { CSSTransition } from 'react-transition-group';
import Heading from './Heading';
import TeamButtons from './TeamButtons';
import AnalyseButton from './AnalyseButton';

function BackgroundCircle(){
  return(
    <CSSTransition in={true} appear={true} timeout={700} classNames="ct">
      <div className="row circle-row">
        <div className="col-12 col-md-12 d-flex justify-content-center">
          <div className="circle mb-5">
            <CSSTransition in={true} appear={true} timeout={1200} classNames="pbt">
              <div className="pokeball d-none d-md-block"></div>
            </CSSTransition>
            <Heading />
            <CSSTransition in={true} appear={true} timeout={900} classNames="tbt">
              <TeamButtons />
            </CSSTransition>
            <CSSTransition in={true} appear={true} timeout={1000} classNames="abt">
              <AnalyseButton />
            </CSSTransition>
          </div>
        </div>
      </div>
    </CSSTransition>
  )
}

export default BackgroundCircle;
