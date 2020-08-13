import React, {useState} from 'react';
import "./ChatScreen.css";
import Avatar from '@material-ui/core/Avatar';

function ChatScreen() {
    const [messages] = useState([{
        name:'Alia',
        image:'https://i.pinimg.com/originals/84/c4/cf/84c4cf3b83a5415756306c9068d00df1.jpg',
        message: 'Hey!'

    }]);
    return (
        <div className='chatScreen'>
           <p className='chatScreen_title'>You matched with Alia on 10/9/20</p> 
           {messages.map(message => (
               <div className='chatScreen_message'>
                   <Avatar className='chatScreen_message' alt={message.name} src={message.image} />
                   <p className='chatScreen_text'> {message.message}</p>
               </div>

           ))}
          
           <form className='input'>
                   <input className='input_field' placeholder='Type a message..' type="text"/>
                   <button className='input_button'>Send</button>
           </form>
           
        </div>
    )
}

export default ChatScreen
