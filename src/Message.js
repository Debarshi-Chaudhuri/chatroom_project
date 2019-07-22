import React,{Component} from 'react'
class Message extends Component{
    render(){
        if(this.props.fromMe)
        return(
        <div style={{textAlign:'right'}}>
            <p>{this.props.name} : {this.props.message}</p>
            
        </div>
        
        );
        else
        return(
        <div style={{textAlign:'left'}}>
            <p>{this.props.name} : {this.props.message}</p>
            
        </div>    
        )
    }
}
export default Message;