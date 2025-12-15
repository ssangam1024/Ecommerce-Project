
import { useState, useEffect } from 'react'
import { ChatInput } from './components/ChatInput';
import  ChatMessage  from './components/ChatMessage';
//  import { chatbot } from 'supersimpledev';


import './App.css'




function  App(){
  // const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('messages')));
  const [chatMessages, setChatMessages] = useState(() => {
    const savedMessages = localStorage.getItem('messages');
    return savedMessages ? JSON.parse(savedMessages) : [];
  });
  
  
  
    useEffect (()=>
      {
        /*chatbot.addResponses({
          'goodmorning': 'Good morning!  Hope your day is off to a great start.',
          'give me a unique id': () => {
            return `Sure! Here's a unique ID: ${crypto.randomUUID()}`;
          }
        });*/
        localStorage.setItem('messages',JSON.stringify(chatMessages))
        }, [chatMessages]);
    
    return(
      <div className="app-container">
        {chatMessages.length === 0 && (
          <p className="welcome-message">
            Welcome to the chatbot project! Send a message using the textbox below.
          </p>
        )}
        
        <ChatMessage chatMessages={chatMessages} />
        <ChatInput 
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
        />
        
      </div>
      
    );
  }



export default App
