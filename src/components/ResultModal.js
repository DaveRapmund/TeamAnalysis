import React from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';

import { closeModal } from '../actions/modalActions';
import Weakness from './Weakness';
import Strength from './Strength';

function ResultModal(props){
  return(
    <div>
      <div className="row modal-container">
        <div className="col-12 col-lg-10 offset-lg-1 col-xl-6 offset-xl-3 result-modal-body">
          <div className="row">
            <div className="col text-right">
              <span><a onClick={() => {
                $('.modal-container').css({'opacity': '0', 'transition': 'opacity 500ms ease'});
                setTimeout(() => {props.closeModal();}, 500);}
                } href="#">&times;</a></span>
            </div>
          </div>
          <div className="row">
            <div className="col result-modal-heading text-center mb-3">
              <h5>Team Analysis</h5>
            </div>
          </div>
          <div className="row result-modal-text">
            <div className="col pl-5 pr-5 text-center mb-4">
              <Weakness />
              <Strength />
            </div>
          </div>
          <div className="row result-modal-button">
            <div className="col text-center">
              <button onClick={() => {
                $('.modal-container').css({'opacity': '0', 'transition': 'opacity 500ms ease'});
                setTimeout(() => {props.closeModal();}, 500);}
                } className="btn btn-success">Good to know</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(null, { closeModal })(ResultModal);
