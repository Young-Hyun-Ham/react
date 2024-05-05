import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainContent from './MainContent';
import Left from './Left';
import './Layout.css'; // Importing CSS for styling

const Layout = () => {
  return (
    <Router>
      <div className="app-container">
        <div className="sidebar">
            <Left />
        </div>
        
        <div className="main-content">
            <MainContent />
        </div>
      </div>
    </Router>
  );
};

export default Layout;
