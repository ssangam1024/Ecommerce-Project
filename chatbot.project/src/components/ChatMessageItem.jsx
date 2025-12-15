
import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/profile-1.png';
import LoadingSpinner from '../assets/loading-spinner.gif'
import './ChatMessageItem.css';
import dayjs from 'dayjs'

                 
export function ChatMessageItem({ message, sender, loading , time }){
// const message =props.message;
// const sender = props.sender
// const { message, sender u} = props
/* if (sender === 'robot'){
return(
<div>
  <img src="images/robot.png" width="50" />
  {message}
</div>
);
}*/
  return (
    <div className= { sender === 'user' ? 'chat-message-user' : 'chat-message-robot' } >
      {sender === 'robot' && ( 
        <img src={RobotProfileImage} className="chat-message-profile"/>
      )} 
      <div className="chat-message-text">
        {loading ? (
        <img src={LoadingSpinner} className="loading-spinner" />
        ) : (
        message
        )}
        {time && (
          <div className='chat-message-time'>
            {dayjs(time).format('h:mma')}
          </div>
      )}
      </div>
      { sender === 'user'&& (
        <img src={UserProfileImage} className= "chat-message-profile" />
      )}
      
      
    </div>
    
    );
}




