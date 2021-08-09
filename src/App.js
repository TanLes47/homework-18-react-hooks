import React from 'react';
import profileImage from "./img/phone-ecran1.png";
import './App.css';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="App">
      <img src={profileImage} alt="profile-image"/>
      {<Contacts/>}
    </div>
  );
}



export default App;
