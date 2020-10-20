import React from 'react';
// import './Home.css';
import Logo from "./assets/dragon.png"
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react';

function Home() {
  const { isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
    <div className="Home">
      <div className="Home-login">
        <img src={Logo} alt="Meet our Dragons logo"/>
        <p>LOGADO PORRA</p>
        <Profile />
        <LogoutButton />
      </div>
    </div>
    )
  );
}
export default Home;
