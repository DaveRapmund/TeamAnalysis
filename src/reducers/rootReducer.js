import { combineReducers } from 'redux';

import modalReducer from './modalReducer';
import currentTeamReducer from './currentTeamReducer';
import saveBtnClassReducer from './saveBtnClassReducer';
import analyseWeaknessReducer from './analyseWeaknessReducer';
import analyseStrengthReducer from './analyseStrengthReducer';

export default combineReducers({
  clickedButton: modalReducer,
  currentTeam: currentTeamReducer,
  currentBtnClass: saveBtnClassReducer,
  currentWeaknesses: analyseWeaknessReducer,
  currentStrengths: analyseStrengthReducer
})
