import './AddDragon.css';
import NewDragon from '../new-dragon/NewDragon';
import Add from '../../assets/plus-icon.png';

import React from 'react'

const AddDragon = () => {
    return (
        <div className="nav">
            <div className="add-dragon-button">
                <img src={Add} alt="add dragon button"/>
            </div>
            <NewDragon />
        </div>
    )
}

export default AddDragon