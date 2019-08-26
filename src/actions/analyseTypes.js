import pa from '../api/pokeapi';

export const analyseTypes = (types) => {
  return async dispatch => {
    let weaknesses = [];
    let strengths = [];
    for(let i = 0; i < types.length; i++){
      const response = await pa.get(`${types[i]}`);
      const filteredResponse = response.data.damage_relations;
      for(let j = 0; j < filteredResponse.double_damage_from.length; j++){
        weaknesses.push(filteredResponse.double_damage_from[j].name);
      }
      for(let k = 0; k < filteredResponse.double_damage_to.length; k++){
        strengths.push(filteredResponse.double_damage_to[k].name);
      }
    }

    let biggestWeaknesses = weaknesses.filter((weakness, index) => weaknesses.indexOf(weakness) !== index);

    let randomWeakness = Math.floor((Math.random() * biggestWeaknesses.length));
    if(biggestWeaknesses.length < 1){
      let randomAddition = Math.floor((Math.random() * weaknesses.length));
      biggestWeaknesses.push(weaknesses[randomAddition]);
    }

    let biggestStrengths = strengths.filter((strength, index) => strengths.indexOf(strength) !== index);
    let randomStrength = Math.floor((Math.random() * biggestStrengths.length));
    if(biggestStrengths.length < 1){
      let randomAddition = Math.floor((Math.random() * strengths.length));
      biggestStrengths.push(strengths[randomAddition]);
    }

    if(biggestWeaknesses[randomWeakness]){
      dispatch({
        type: 'ANALYSE_WEAKNESS',
        payload: biggestWeaknesses[randomWeakness]
      })
    }

    if(biggestStrengths[randomStrength]){
      dispatch({
        type: 'ANALYSE_STRENGTH',
        payload: biggestStrengths[randomStrength]
      })
    }
  }
}
