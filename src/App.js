import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FeedPage from './FeedPage';
import ProfilePage from './ProfilePage';
import SideBar from './SideBar';
import UploadPage from './UploadPage.js';
import EditProfilePage from './EditProfilePage.js';
import Register from './Register.jsx';
import Login from './Login.jsx';
import LandingPage from './LandingPage.js';

function App() {
  const [activeUser, setActiveUser] = useState(null);

  const logIn = ({user}) => {
    setActiveUser({
      id: 0,
      username: "marco",
      bio:"hi,im marco paolieri, i have a dog",
      followers:21,
      following:20,
      password: "1234",
      email: "mail@mail.com",
      profile_picture: "https://qed.usc.edu/paolieri/marco_paolieri.jpg",
    });
  };

  return (
    <>
      {activeUser == null ? 
      <Router>
        <Routes>
          <Route path="/" element={<Login logIn={logIn}/>} />
          <Route path="/signup" element={<Register logIn={logIn}/>} />
        </Routes>
      </Router>
      :
      <Router>
        <div>
          <SideBar />
            <Routes>
                <Route path="/" element={<FeedPage />} />
                <Route path="/explore" element={<FeedPage />} />
                <Route path="/profile" element={<ProfilePage user={activeUser}/>} />
                <Route path="/upload" element={<UploadPage />} />
                <Route path="/edit" element={<EditProfilePage user={activeUser}/>} />
            </Routes>
        </div>
      </Router>
      }
    </>
  );
}

export default App;
