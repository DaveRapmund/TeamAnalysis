const saveBtnClassReducer = (currentBtnClass = "", action) => {
  switch(action.type){
    case 'SAVE_BUTTON_CLASSNAME':
      return action.payload;
    default:
      return currentBtnClass;
  }
}

export default saveBtnClassReducer;
