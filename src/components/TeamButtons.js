import React from 'react';
import AddButton from './AddButton';

function TeamButtons(){
  return(
    <div className="row mb-4">
      <div className="col">
        <div className="row button-row justify-content-center">
          <AddButton buttonClass={'button-1'} />
          <AddButton buttonClass={'button-2'} />
          <AddButton buttonClass={'button-3'} />
        </div>
        <div className="row button-row justify-content-center">
          <AddButton buttonClass={'button-4'} />
          <AddButton buttonClass={'button-5'}  />
          <AddButton buttonClass={'button-6'} />
        </div>
      </div>
    </div>
  )
}

export default TeamButtons;
