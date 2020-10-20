import React from 'react';
import './Unauthenticated.css';
import Logo from "../../assets/dragon.png"
import LoginButton from '../LoginButton';
import { useAuth0 } from '@auth0/auth0-react';

function HomeUnauthenticated() {
  const { isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
    <div className="Home-unauthenticated">
      <div className="Home-login">
        <img src={Logo} alt="Meet our Dragons logo"/>
        <p>Meet our Dragons</p>
        <LoginButton />
      </div>
    </div>
    )
  );
}
export default HomeUnauthenticated;
