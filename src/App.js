import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FeedPage from './FeedPage';

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" component={FeedPage} />
    //   </Routes>
    // </Router>
    <FeedPage />
  );
}

export default App;
