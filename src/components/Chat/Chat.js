import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import {Link } from 'react-router-dom';
import './Chat.css';

function Chat() {
  return (
    <div className='Chatcontener'>
      <div className='Chatheader'>
      <Link to="/Chatbox"><FontAwesomeIcon icon={faArrowLeft} className='Chatarrow'></FontAwesomeIcon></Link>
      
        <img></img>
        <div className='Chatname'>
          <h1 className='Chatniki'>Nikita Sathe</h1>
          <h2 className='Chatonline'>online</h2>
        </div>
      </div>
      <div className='Chatchat'>
        <div className='Chatconten'>
          <img className='Chatsendimg'></img>
          <div className='Chatsendmsg'></div>
        </div>
        <div className='Chatconten'>
          <div className='Chatreplymsg'></div>
          <img className='Chatreplyimg'></img>
        </div>
      </div>
      <div className='Chattext'>
      <textarea className='Chatwrite' rows="3" placeholder="Say Something..."></textarea>
      <FontAwesomeIcon icon={faMicrophone} className='Chatmicrophone'></FontAwesomeIcon>
      </div>
    </div>        
  );
}

export default Chat;
