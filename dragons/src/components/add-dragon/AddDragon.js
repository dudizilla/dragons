import React from 'react'
import './AddDragon.css';
import Add from '../../assets/plus-icon.png';
import NewDragon from '../new-dragon/NewDragon';

import dragonsService from '../../data/DragonService';

export default class AddDragon extends React.Component {
  state = {
    stateOpen: false
  }
  constructor(props) {
    super(props);
    this.state = {
      stateOpen: true,
      name: '',
      type: '',
    }
  }

  cancel = () => {
    this.stateChange();
  }

  add = (data) => {
    dragonsService.postDragons(data)
      .then(result => {
        this.stateChange()
        setTimeout(() => {
          this.props.onAdd()
        }, 1000); //apesar da API retornar sucesso no post, a API está demorando para retornar esse registro no GET esse é o motivo do timeout
      });
  }

  stateChange = () => {
    this.setState(prevState => ({
      stateOpen: !prevState.stateOpen
    }));
  }


  render() {
    if (this.state.stateOpen === false) {
      return (
        <div className="nav">
          <div className="add-dragon-button" onClick={this.stateChange}>
            <img src={Add} alt="add dragon button" />
          </div>
          <NewDragon cancel={this.cancel} add={this.add} /> 
        </div>
      )
    } else {
      return (
        <div className="nav">
          <div className="add-dragon-button" onClick={this.stateChange}>
            <img src={Add} alt="add dragon button" />
          </div>

        </div>
      )
    }

  }
  /*render() {
  return (

    <div className="nav">
      <div className="add-dragon-button" onClick={this.abre}>
        <img src={Add} alt="add dragon button" />
      </div>
      <NewDragon isOpen={this.state.open} />
    </div>
  )
}*/
}