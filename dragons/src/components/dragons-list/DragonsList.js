import React from 'react';

import './DragonsList.css'
import Picture from "../../assets/dragons-default.png";
import dragonsService from '../../data/DragonService';
import AddDragon from '../add-dragon/AddDragon';

export default class DragonsList extends React.Component {
  state = {
    dragons: []
  }

  componentDidMount() {
    this.refresh();
  }

  refresh = () => {
    dragonsService.getDragons()
      .then(dragons => {
        this.setState({ dragons })
      });
  }

  render() {
    return (
      <div>
        <AddDragon onAdd={this.refresh} />
        <div className="dragons-list">
          {this.state.dragons.map(dragons =>
            <div className="dragon-card" key={dragons.id}>
              <img className="dragon-image" src={Picture} alt="Dragon" />
              <div className="dragon-infos">
                <p className="dragon-name"> name: {dragons.name} </p>
                <p className="dragon-type"> type: {dragons.type} </p>
                <p className="dragon-created"> created at: {new Date(Date.parse(dragons.createdAt)).toLocaleDateString()} </p>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}
