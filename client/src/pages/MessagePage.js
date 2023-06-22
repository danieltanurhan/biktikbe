import React, { useState } from 'react';
import './placeholder.js';
import MessageDataService from '../services/MessageService.js';

function MessagePage() {
  const initialMessageState = {
    id: null,
    user_text: ""
  };

  const [message, setMessage] = useState(initialMessageState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setMessage({...message, [name]: value});
    
  };

  const saveMessage = () => {
    
    var data = {
      user_text: message.user_text
    };
    
    MessageDataService.create(data)
      .then(response => {
        setMessage({
          user_text: response.data.user_text
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newMessage = () => {
    setMessage(initialMessageState);
    setSubmitted(false);
  }

  return (
    <div id="app">
      <div id="main" className="neg oe">
        <div id="top">
          <a href="/" className="router-link-active">
            <span>biktik</span>
            <span id="logo" className="imp bold">be</span>
          </a>
        </div> 
      {submitted ? (    
            <div id="sub">
              <div id="center" className="imp">
                {/* <div>say anything unique</div> */}
                <div>You have successfully submitted!</div>
                <div className="oe">
                  <button className="next-button" onClick={newMessage}>[NEXT]</button>
                </div>
              </div>
              <div id="bottom">
              </div>
            </div>
      ) : (
          <div id="notsub">
            <div id ="center" className="imp">
              <div>say anything unique</div>
              <input id="user_text" 
                     type="text" 
                     name='user_text'
                     autoComplete='off'
                     maxLength="72" 
                     placeholder="Say anything you want" 
                     className="input condensed"
                     value={message.user_text}
                     onChange={handleInputChange}
                     />
              
              <div className="oe">
                <button className="next-button" onClick={saveMessage}>[NEXT]</button>
              </div>
            </div>
            <div id="bottom">
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MessagePage;