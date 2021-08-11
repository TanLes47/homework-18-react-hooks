import React from 'react';
import profileImage from "./img/phone-ecran1.png";
import './App.css';






function App() {
  return (
    <div className="App">
    <h1 class="myInfo">Мої контакти</h1>
    <img src={profileImage} alt="profile-image" class="img"/>
    
    </div>
  );
}



export default App;
