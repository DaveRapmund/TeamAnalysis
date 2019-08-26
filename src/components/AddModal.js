import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../actions/modalActions';
import { pullPokemonData } from '../actions/pullPokemonData';
import $ from 'jquery';

class AddModal extends Component{

  onInputChange = (e) => {
    this.userInput = e.target.value.toLowerCase();
  }

  onKeyPressed = (e) => {
    if(e.keyCode === 13){
      this.props.pullPokemonData(this.userInput, this.props.currentBtnClass);
      $('.modal-container').css({'opacity': '0', 'transition': 'opacity 500ms ease'})
      setTimeout(() => {this.props.closeModal(); }, 500);
    }
  }

  render(){
    return(
      <div className="row modal-container">
        <div className="col-12 col-sm-8 offset-sm-2 col-xl-4 offset-xl-4 add-modal-body">
          <div className="row">
            <div className="col text-right">
              <span>
                <a href="#" onClick={() => {
                  $('.modal-container').css({'opacity': '0', 'transition': 'opacity 500ms ease'});
                  setTimeout(() => {this.props.closeModal(); }, 500);}
                  }
                >
                  &times;
                </a>
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col add-modal-heading text-center mb-3">
              <h5>Add Pokémon to team</h5>
            </div>
          </div>
          <div className="row">
            <div className="col text-center mb-4">
              <input className="w-100" autoFocus onChange={this.onInputChange} onKeyUp={this.onKeyPressed} placeholder="Type PKMN name.."></input>
            </div>
          </div>
          <div className="row">
            <div className="col text-center mt-1">
              <button onClick={() => {
                this.props.pullPokemonData(this.userInput, this.props.currentBtnClass);
                $('.modal-container').css({'opacity': '0', 'transition': 'opacity 500ms ease'})
                setTimeout(() => {this.props.closeModal(); }, 500);
              }}
              className="btn btn-info">Add Pokémon</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    currentBtnClass: state.currentBtnClass
  }
}

export default connect(mapStateToProps, { closeModal, pullPokemonData })(AddModal);
