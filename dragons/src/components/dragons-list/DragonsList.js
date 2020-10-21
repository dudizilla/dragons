import React from 'react';

import './DragonsList.css'
import Picture from "../../assets/dragons-default.png";
import dragonsService from '../../data/DragonService';
import DeleteButton from '../delete-button/DeleteButton'
import EditButton from '../edit-button/EditButton';

export default class DragonsList extends React.Component {
    state = {
        dragons:  []
    }

    componentDidMount() {
        dragonsService.getDragons()
            .then(dragons => {
                this.setState({ dragons })
            });
    }

    render() {
        return (
            <div className="dragons-list">
                { this.state.dragons.sort().map(dragons => 
                <div className="dragon-card"> 
                    <img className="dragon-image" src={Picture} alt="Dragon" />
                    <div className="dragon-infos">
                        <p className="dragon-name"> name: {dragons.name} </p>
                        <p className="dragon-type"> type: {dragons.type} </p>
                        <p className="dragon-created"> created at: {dragons.createdAt} </p>
                    </div> 
                    <EditButton />
                    <DeleteButton />
                </div>
                )}
            </div>
        )
    }
}
