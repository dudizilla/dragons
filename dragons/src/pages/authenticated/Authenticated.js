import React from 'react';
import './Authenticated.css';
import Logo from "../../assets/dragon.png"
import LogoutButton from '../../components/logout-button/LogoutButton';
import Profile from '../../components/profile/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import DragonsList from '../../components/dragons-list/DragonsList';

function HomeAuthenticated() {
  const { isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
    <div className="Home-authenticated">
      <header className="header">
        <div className="header-profile">
          <Profile />
        </div>

        <div className="header-title">
          <img className="logo" src={Logo} alt="Meet our Dragons logo"/>
          <h3 className="page-title">Meet our Dragons</h3>
        </div>

        <div className="header-logout">
        <LogoutButton />
        </div>
      </header>
      <DragonsList />
    </div>
    )
  );
}

export default HomeAuthenticated;
