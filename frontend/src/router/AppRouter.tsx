import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import PageURL from '../pages/url/PageUrl';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/url" element={<PageURL/>}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;