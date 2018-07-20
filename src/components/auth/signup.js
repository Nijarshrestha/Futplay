import React,{Component} from 'react';
import request from 'axios'

class Signup extends Component{
    constructor(props){
        super(props);
        this.state={
            userprofile: {
                name: '', 
                age:12
            }
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
        
    }
    handleChange(e){
        this.setState({userprofile: { name: e.target.value, age: 12}},()=>{
            console.log(this.state.userprofile)
        })
    }
    handleSubmit(){
        const { userprofile: {name: myusername, age: myage} } = this.state
        request
    }
    render(){
        return(
            <div>
                <input 
                    type="text"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleSubmit}>signup</button>
            </div>
        )
    }
}
export default Signup