const modalReducer = (clickedButton = null, action) => {
  switch(action.type){
    case 'SHOW_ADD_MODAL':
      return action.payload;
    case 'SHOW_RESULT_MODAL':
      return action.payload;
    case 'CLOSE_MODAL':
      return null;
    default:
      return clickedButton;
  }
}

export default modalReducer;
