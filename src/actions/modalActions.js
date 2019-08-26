export const addButtonClicked = (clickedButton) => {
  return{
    type: 'SHOW_ADD_MODAL',
    payload: clickedButton
  }
}

export const analyseButtonClicked = (clickedButton) => {
  return{
    type: 'SHOW_RESULT_MODAL',
    payload: clickedButton
  }
}

export const closeModal = () => {
  return{
    type: 'CLOSE_MODAL'
  }
}
