import React from 'react';
import { connect } from 'react-redux';
import { addButtonClicked } from '../actions/modalActions';
import { saveBtnClass } from '../actions/saveBtnClass';

function AddButton(props){
  return(
    <div className={props.buttonClass} onClick={() => {
      props.addButtonClicked('add')
      props.saveBtnClass(props.buttonClass);
    }}>
      <svg width="30px" height="30px">
        <path stroke="#C4C4C4" strokeWidth="5px" d="M15 0 V30 M0 15 H30"/>
      </svg>
    </div>
  )
}

export default connect(null, { addButtonClicked, saveBtnClass })(AddButton);
