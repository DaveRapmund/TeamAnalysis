import pa from '../api/pokeapi';
import $ from 'jquery';

export const pullPokemonData = (pokemonToSearchFor, currentBtnClass) => {
  return async dispatch => {
    if(pokemonToSearchFor){
      const fullListData = await pa.get('/pokemon/?limit=1000');
      const fullListFiltered = fullListData.data.results;
      for(let i = 0; i < fullListFiltered.length; i++){
        if(fullListFiltered[i].name === pokemonToSearchFor){
          const response = await pa.get(`/pokemon/${pokemonToSearchFor}`);
          const currentSprite = response.data.sprites.front_default;
          $('.'+currentBtnClass).css({
            'background-image': 'url('+currentSprite+')'
          })
          $('.'+currentBtnClass+' svg').css({
            'display': 'none'
          })

          let types = [];
          for(let i = 0; i < response.data.types.length; i++){
            types.push(response.data.types[i].type.url);
          }

          dispatch({
            type: 'ADD_TO_CURRENT_TEAM',
            payload: [currentBtnClass, types]
          });
        }
      }
    }
  }
}
