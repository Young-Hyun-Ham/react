
import React from 'react';
import Top from './Top';
import MainContent from './MainContent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Layout.css'; // Import custom CSS for styling

function Layout() {
  return (
    <div className="app">
      <Top />
      <MainContent />
    </div>
  );
}

export default Layout;
