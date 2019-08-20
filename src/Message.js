import React,{Component} from 'react'
import Avatar from '@material-ui/core/Avatar'
import './App.css'

class Message extends Component{   
    
    render(){

        if(this.props.fromMe)
        return(
        <div >
            <ul>
            <p className='right'><Avatar style={{marginLeft:'92%',backgroundColor:'orange',width:'30px',height:'30px',fontSize:'15px'}}>{this.props.name.substring(0,3)}</Avatar>{this.props.message}</p>  
            
            </ul>          
        </div>
        );
        else
        return(
            <div >
            <ul>
            <p className='left'><Avatar style={{backgroundColor:'purple',width:'30px',height:'30px',fontSize:'15px'}}>{this.props.name.substring(0,3)}</Avatar>{this.props.message}</p>  
            
            </ul>          
        </div>
        )
    }
}
export default Message;