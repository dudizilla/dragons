import './NewDragon.css';
import Logo from '../../assets/dragon.png';
// import dragonsService from '../../data/DragonService';

import React from 'react'

export default class NewDragon extends React.Component {
  state = {
    name: '',
    type: ''
  }

  componentDidMount() {
    handleChange = event => {
      this.setState({ name: event.target.value });
      this.setState({ type: event.target.value });
    }

    handleSubmit = event => {
      event.preventDefault();
      const user = {
        name: this.state.name,
        type: this.state.type
      }
    }
  }

  render() {
    return (
      <div className="fullscreen">
        <div className="backdrop">
        </div>
        <div className="popup">
          <img src={Logo} alt="meet our fragons logo" />
          <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" onChange={this.handleChange} placeholder="Dragon name" />
          <input type="text" name="type" onChange={this.handleChange} placeholder="Type" />

            <div className="button">
              <button className="add-dragon popup-button" type="submit">Add</button>
              <button className="cancel-dragon popup-button">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
