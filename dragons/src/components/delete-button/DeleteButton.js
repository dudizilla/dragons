import React from 'react'
import Delete from '../../assets/close-icon.png';
import './DeleteButton.css';

const DeleteButton = () => {
    return (
        <div className="delete-div">
            <button className="delete-button">
                <img className="delete-icon" src={Delete} alt="delete dragon button" />
            </button>
        </div>
    )
}

export default DeleteButton
