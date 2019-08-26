const analyseStrengthReducer = (strengths = [], action) => {
  switch(action.type){
    case 'ANALYSE_STRENGTH':
      return(
        action.payload
      )
    default:
      return strengths
  }
}

export default analyseStrengthReducer;
