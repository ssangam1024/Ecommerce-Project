import { useState } from 'react'
import {chatbot} from 'supersimpledev';
import './ChatInput.css';
import dayjs from 'dayjs';


export function ChatInput({chatMessages, setChatMessages}){
        
    const [inputText, setInputText]= useState('');
    
    function saveInputText(event){
        setInputText(event.target.value);
      }
    async function sendMessage() { 
   
      if (!inputText.trim()) return;
  
    const newChatMessages = [
            ...chatMessages,
            {
              message: inputText,
              sender: 'user',
              id: crypto.randomUUID(),
              time: dayjs().valueOf()
            }
      ];
    setInputText(''); 

    setChatMessages([
      ...newChatMessages,
    
      {
        message: null,
        sender: 'robot',
        loading: true,
        id: crypto.randomUUID(),
        time: dayjs().valueOf()
      }
      
    ]);


    const response = await chatbot.getResponseAsync(inputText);

    setChatMessages([
            ...newChatMessages,
            {
              message: response,
              sender: 'robot',
              loading: false,
              time: dayjs().valueOf(),
              id: crypto.randomUUID()
              
            }
    ]);


  }

    function handleKeyDown( event){
        if(event.key=== 'Enter'){
          sendMessage();
        } else if (event.key === 'Escape'){
          setInputText ('');
        }
    } 
    function ClearMessage(){
        setChatMessages([]);
    }
  
    return(
        <div className = "chat-input-container">
          <input 
          placeholder="send a message to Chatbot" 
          size="30" 
          onChange={saveInputText}
          value={inputText}
          onKeyDown={handleKeyDown}
          className="chat-input"
          />
        <button 
        onClick ={sendMessage}
        className = "send-button"
        > Send </button>
        <button 
        className='clear-button'
        onClick={ClearMessage}
        >
          clear
        </button>
      </div> 
    );
}

