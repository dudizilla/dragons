import React from 'react';

import axios from 'axios';

import Picture from "./assets/dragons-default.png"

export default class DragonsList extends React.Component {
    state = {
        dragons:  []
    }

    componentDidMount() {
        axios.get('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon')
        .then(res => {
            const dragons = res.data;
            this.setState({ dragons });
        })
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
                </div>
                )}
            </div>
        )
    }
}
