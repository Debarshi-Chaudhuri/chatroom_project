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
                <p style={{marginRight:'9px',fontSize:'20px'}}>Enter your name :
                &nbsp;<input style={{height:'30px',width:'200px',fontSize:'15px'}} type="text" onChange={this.change1} value={this.state.name} placeholder="Enter name here"/>
                &nbsp;&nbsp;<button style={{height:'30px',width:'60px'}} onClick={this.change2} >Submit</button></p>
            </div>
        );

        
    }
}
export default ChatHome;