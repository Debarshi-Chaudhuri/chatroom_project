import React ,{Component} from 'react'
import ChatApp from './ChatApp'

class ChatHome extends Component{
    constructor(props){
        super(props)
        this.state={status:false,name:""}
    }
    change1=(event)=>{
        this.setState({name:event.target.value})
    }
    change2=()=>{
        this.setState({status:true})
    }
    render(){
        if(this.state.status)
        return(
            <div>
                <ChatApp name={this.state.name} />
            </div>
        );
        else
        return(
            <div className='input'>
                <p style={{marginRight:'9px'}}>Enter your name :</p>
                <input type="text" onChange={this.change1} value={this.state.name} placeholder="Enter name here"/>
                <button onClick={this.change2} >Submit</button>
            </div>
        );

        
    }
}
export default ChatHome;