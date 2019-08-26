const analyseWeaknessReducer = (weaknesses = [], action) => {
  switch(action.type){
    case 'ANALYSE_WEAKNESS':
      return(
        action.payload
      )
    default:
      return weaknesses
  }
}

export default analyseWeaknessReducer;
