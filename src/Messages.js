import React,{Component} from 'react'
import Message from './Message.js'
import './App.css'
class Messages extends Component{
    constructor(props){
        super(props)
        this.myref=React.createRef();
    }
    componentDidUpdate(){
        this.myref.current.scrollBy(0,5000)
    }
    render(){
        return(
            <div className="scroll" ref={this.myref}>{
                this.props.messages.map(
                    (item)=><Message message={item.message} name={item.username} fromMe={item.fromMe}/>     
                )
            }
            
            </div>

        );
    }
}
export default Messages;