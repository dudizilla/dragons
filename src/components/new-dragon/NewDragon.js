import './NewDragon.css';
import Logo from '../../assets/dragon.png';

import React from 'react'

export default class NewDragon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      type: ''
    }
  }

  handleChangeName = (event) => {
    this.setState({ name: event.target.value });
  }

  handleChangeType = (event) => {
    this.setState({ type: event.target.value });
  }

  onSubmit = () => {
    this.props.add({
      name: this.state.name,
      type: this.state.type
    })
  }

  render() {
    return (
      <div className="fullscreen">
        <div className="backdrop">
        </div>
        <div className="popup">
          <img src={Logo} alt="meet our dragons logo" />
          <input type="text" value={this.state.name} onChange={this.handleChangeName} name="name" placeholder="Dragon name" />
          <input type="text" value={this.state.type} onChange={this.handleChangeType} name="type" placeholder="Type" />

          <div className="button">
            <button className="add-dragon popup-button" onClick={this.onSubmit}>Add</button>
            <button className="cancel-dragon popup-button" onClick={this.props.cancel}>Cancel</button>
          </div>
        </div>
      </div>
    )
  }
}
