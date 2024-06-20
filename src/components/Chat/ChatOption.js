import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch, faCheck, faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import './ChatOption.css';
import { Link } from 'react-router-dom';
function ChatOption() {
  return (
    <div className='Chatcontener'>
      <div className='feedbackheader'>
        <Link to="/student"><FontAwesomeIcon icon={faArrowLeft} className='Attendanceicon' /></Link>
        <h1>Chat Box</h1>
      </div>
      <FontAwesomeIcon icon={faSearch} className='ChatSearch'></FontAwesomeIcon>
      <input className='Chatinput' type='text' name='search' placeholder='Search By Name'></input>
      <div className='Chatconteners'>
      <Link to="/Chat">
        <div className='Chatnamebox'>
         <img className='Chatboximg'></img>
         <div className='Chatnametext'>
            <h1 className='Chatnikita'>Mrs.Nikita Sathe</h1>
            <h2 className='Chatsub'>Subject: English</h2>
            <div className='Chatavailable'>
                <FontAwesomeIcon icon="faCheck" className='Chatcheck'></FontAwesomeIcon>
                <h1 className='ChatAvailable'>Available</h1>
            </div>
         </div>
        </div>
        </Link>
        <div className='Chatnamebox'>
         <img className='Chatboximg'></img>
         <div className='Chatnametext'>
            <h1 className='Chatnikita'>Mrs.Priyanka Chature</h1>
            <h2 className='Chatsub'>Subject: English</h2>
            <div className='Chatunavailable'>
                <h1 className='ChatAvailable'>UnAvailable</h1>
            </div>
         </div>
        </div>
      </div>
    </div>        
  );
}

export default ChatOption;

