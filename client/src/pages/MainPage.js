import React from 'react';
import './MessagePage.css';

const MainPage = () => {
  return (
    <div id="app">
      <div id="main">
        <div id="top">
          <a href="/" className="router-link-active">
            <span>biktik</span>
            <span id="logo" className="imp bold">be</span>
          </a>
        </div>
        <div id="bottom">
          <a href="/message" class>
            <span className="bold">output </span>
             a message 
          </a>
        </div>
      </div>
    </div>
    
  );
}

export default MainPage;