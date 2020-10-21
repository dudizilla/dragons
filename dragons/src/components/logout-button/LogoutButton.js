import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import './LogoutButton.css'

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
        <button className="logout-button" onClick={() => logout()}>
            Log Out
        </button>
        )
    )
}

export default LogoutButton
