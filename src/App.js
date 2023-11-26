import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FeedPage from './FeedPage';
import ProfilePage from './ProfilePage';
import SideBar from './SideBar';
import UploadPage from './UploadPage.js';

function App() {
  const [activeUser, setActiveUser] = useState(null);

  const logIn = () => {
    setActiveUser({
      id: 0,
      username: "marco",
      password: "1234"
    });
  };

  return (
    <>
      {activeUser == null ? 
      <div>
        <button onClick={logIn}>Log In</button>
      </div> :
      <Router>
        <div>
          <SideBar />
            <Routes>
                <Route path="/" element={<FeedPage />} />
                <Route path="/explore" element={<FeedPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/upload" element={<UploadPage />} />
            </Routes>
          </div>
        </Router>
      }
    </>
  );
}

export default App;
