
import { useRef, useEffect } from 'react'
import {ChatMessageItem} from '../components/ChatMessageItem';
import './ChatMessage.css';
import UserProfileImage from '../assets/profile-1.png';

console.log(UserProfileImage); 
function useAutoScroll(dependencies){
  const containerRef = useRef(null);
  
  useEffect(()=>{
  const containerElem = containerRef.current;
   if(containerElem){
     containerElem.scrollTop = containerElem.scrollHeight;
   }
  }, dependencies);

  return containerRef;
}

function ChatMessage ({chatMessages}) {
const chatMessageRef = useAutoScroll ([chatMessages]);


return(
    <div className="chat-message-container" ref={chatMessageRef} >
      {chatMessages.map((msg) => 
            <ChatMessageItem
              message={msg.message}
              sender={msg.sender}
              time={msg.time}
              key={msg.id}
              
            />
          ) } 
    </div>
  );
}

export default ChatMessage;

