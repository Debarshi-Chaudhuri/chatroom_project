import React ,{Component} from 'react'
import ChatInput from './ChatInput.js'
import Messages from './Messages.js'
import io from 'socket.io-client'
import './App.css'
class ChatApp extends Component{
    constructor(props){
        super(props)
        this.state={messages:[]}
        this.socket=io('localhost:4001',{query:`username=${props.name}`})
        this.socket.on('server:message',messageObj=>{this.addMessage(messageObj)})
    }   
    addMessage=(obj)=>{
        this.setState({messages:this.state.messages.concat([obj])})
    }
    send=(text)=>{
        const newMessage={
            username:this.props.name,
            message:text,
            fromMe:true
        }
        this.socket.emit('client:message',newMessage)
        this.addMessage(newMessage)
    }
     
    render(){
        return(
            <div id="container">
            <Messages messages={this.state.messages} />
            <ChatInput send={this.send} name={this.props.name}/>
            </div>
        );
    }
}
export default ChatApp;