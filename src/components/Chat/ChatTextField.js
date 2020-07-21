import React from 'react';
import './Chat.css';
import firebase from 'firebase'

export default class ChatTextField extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            message: ""
        }
    }

    messagesEndRef = React.createRef()

    render(){
        return (
            <div className = "chat-textfield" >
                
                <textarea 
                  value={this.state['message']} 
                  onChange={(m)=>{this.setState({message:m.target.value})} } 
                  onKeyPress={(event)=>{if(event.key==="Enter")this.sendClick()}}                  
                  className="chat-text-input" 
                  type="textarea" 
                  rows={5}  
                  placeholder="Envie uma mensagem..." /> 

                <div ref={this.messagesEndRef}
                  className="send-button" 
                  onClick={this.sendClick.bind(this)} >
                    Enviar
                </div>
            </div>
          );
    }

    sendClick(){
        let date = new Date()
        firebase.database().ref("messages/" + date.getTime()).set({
            senderId:this.props['senderId'],
            senderName:this.props['senderName'],
            message: this.state['message']
        })

        
        //adiciona pontos por mensagem
        firebase.database().ref("/users/"+this.props['senderId']+'/points').once("value",p =>{ 
            firebase.database().ref("/users/"+this.props['senderId']+'/points').set( p.val() + 1)
        })
        
        this.setState(
            {message:""}
        )
    }
}
