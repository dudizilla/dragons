import React from 'react'

import Edit from '../../assets/edit-icon.png';
import './EditButton.css';

export const EditButton = () => {
    return (
        <div className="edit-div">
            <button className="edit-button">
                <img className="edit-icon" src={Edit} alt="edit dragon button" />
            </button>
        </div>
    )
}

export default EditButton
