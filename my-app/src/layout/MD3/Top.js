// Top.js
import React from 'react';
import './Top.css'; // Import custom CSS for styling
import * as Icon from 'react-bootstrap-icons';

const fn_searchBtn = (type) => {
  switch (type) {
    case "home" :
      console.log("home");
      break;
    case "search" :
      console.log("search");
      break;
    case "info" :
      console.log("info");
      break;
    case "login" :
      console.log("login");
      break;
    case "logout" :
      console.log("logout");
      break;
    default :
      break;
  }
}

function Top() {

  return (
    <div className="top-bar">
      <div className="logo" onClick={() => fn_searchBtn('home')}>HAMA</div> 
      <div className="search-bar">
        <input type="text" placeholder="Search for products, brands, and more" />
        <span>&nbsp;</span>
        <button onClick={() => fn_searchBtn('search')}><Icon.Search className="ml-4" /></button>
      </div>
      <div className="user-info">
        <span className="icon" onClick={() => fn_searchBtn('info')}><Icon.InfoCircle className="ml-2" /></span>
        <span className="login" onClick={() => fn_searchBtn('login')}>Login</span>
        <span className="logout" onClick={() => fn_searchBtn('logout')}>Logout</span>
      </div>
    </div>
  );
}

export default Top;
