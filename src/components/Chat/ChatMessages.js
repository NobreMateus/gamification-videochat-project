import React from 'react';
import './Chat.css';
import firebase from 'firebase'


export default class ChatMessages extends React.Component{
   
    constructor(props){
        super(props)
        this.state = {
            messages:[]
        }
    }

    componentDidMount(){
        firebase.database().ref('/messages').on("child_added", this.updateMessages.bind(this) )
    }

    ref = React.createRef()

    render(){

        return(
            <div className="chat-messages" ref = {this.ref}> 
                    {this.state['messages'].map(m=>{
                        return <div className="message-box"> 
                            <div className="message-name-area">{m['senderName']}</div>
                            {m['message']}
                        </div>
                    })}
            </div>
        )
    }

    componentDidUpdate(){
        this.ref.current.scroll({top: this.ref.current.scrollHeight+100,
            left: 0,
            behavior: 'smooth'})
    }

    updateMessages(params){
        
        var messages = this.state['messages']
         
        messages.push(params.val())

        this.setState({
            messages: messages
        })

        
    }
}