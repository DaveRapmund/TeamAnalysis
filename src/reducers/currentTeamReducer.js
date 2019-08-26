const currentTeamReducer = (currentTeam = {}, action) => {
  switch(action.type){
    case 'ADD_TO_CURRENT_TEAM':
      return {...currentTeam, [action.payload[0]]: [action.payload[1]]};
    default:
      return currentTeam;
  }
}

export default currentTeamReducer;
