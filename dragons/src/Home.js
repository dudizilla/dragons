import React from 'react';
import './Home.css';
function Home() {
  return (
    <div className="Home">
      <div className="Home-login">
        <img alt="Meet our Dragons Logo - Red Dragon" src="assets\dragon.png" />
        <p>Meet our Dragons</p>
        <button type="button">Login with Auth0</button>
      </div>
    </div>
  );
}
export default Home;
