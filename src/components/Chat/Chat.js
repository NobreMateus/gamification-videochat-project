import React from 'react';
import './Chat.css';
import ChatTextField from './ChatTextField'
import ChatMessages from './ChatMessages'

class Chat extends React.Component {
  
  render(){
    return (
        <div className="Chat">
              <ChatMessages/>
              <ChatTextField senderName = {this.props['senderName']} senderId={this.props['userId']} />
        </div>
    );
  }
}

export default Chat;