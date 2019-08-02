import React,{Component} from 'react'
import './App.css'
import io from 'socket.io-client'
class ChatInput extends Component{
    constructor(props){
        super(props)
        this.state={text:"",user:"",status:false}
        this.socket=io('localhost:4001',{query:`username=${props.name}`})
        this.socket.on('server:typingStatus',(datan,stat)=>{this.typing(datan,stat)})
    }
    change=(event)=>{
        this.setState({text:event.target.value})
    }
    typingFunction=()=>{
        
        this.socket.emit('client:typing',`${this.props.name} is typing`,true)
       // this.typing(`${this.props.name} is typing`,true);
    }
    typing=(name,stat)=>{
        this.setState({user:name,status:stat},()=>{
            this.setState({status:false});
            console.log(this.state.user)})
            
    }
    click=()=>{
        if(this.state.text.trim()!="")
        this.props.send(this.state.text);
        this.socket.emit('client:typing','',false)
        this.setState({text:"",user:"",status:false});    
        
    }
    render(){
        
        return(
            <div style={{marginTop:'10%',position:'flex'}}>
                <div className="typing">
                    <p style={{fontSize:'12px'}}>{this.state.user}</p>
                </div>
                <div className="input">
                
                    <input style={{height:'30px',width:'400px',fontSize:'15px'}} onChange={this.change} onKeyPress={this.typingFunction} type="text" value={this.state.text}/>
                    &nbsp;&nbsp;<button style={{width:'70px',fontSize:'15px'}} onClick={this.click}>Send</button>
                </div>
            </div>
        );
        
    }
}
export default ChatInput;