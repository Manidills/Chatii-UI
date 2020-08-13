import React from 'react';
import './Chats.css';
import Chat from './Chat';

function Chats() {
    return (
        <div className='chats'>
            <Chat
                name='Alia bhatt'
                message='Hey!'
                timestamp='30 minutes ago'
                profilePic='https://i.pinimg.com/originals/84/c4/cf/84c4cf3b83a5415756306c9068d00df1.jpg'

            />
            <Chat
                name='Sonam kapoor'
                message='Dude!'
                timestamp='10 minutes ago'
                profilePic='https://media.short-biography.com/wp-content/uploads/sonam-kapoor/Actress-Sonam-Kapoor-1024x1024.jpg'

            />

            
        </div>
    )
}

export default Chats
