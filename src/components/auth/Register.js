import React from 'react';
import {Alert, Button, FormGroup, controlId, Label,FormControl,HelpBlock,ControlLabel} from 'react-bootstrap';
import axios from 'axios'

class Register extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            Firstname: "",
            Lastname:"",
            Email:"",
            Phonenumber:"",
            Username:"",
            Password: "",
            Password2:""
            
        }
        this.handleChangeFirstname = this.handleChangeFirstname.bind(this)
        this.handleChangeLastname = this.handleChangeLastname.bind(this)
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangePhonenumber = this.handleChangePhonenumber.bind(this)
        this.handleChangeUsername = this.handleChangeUsername.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
        this.handleChangePassword2 = this.handleChangePassword2.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChangeFirstname(event){
        this.setState({Firstname:event.target.value})
    }
    handleChangeLastname(event){
        this.setState({Lastname:event.target.value})
    }
    handleChangeEmail(event){
        this.setState({Email:event.target.value})
    }
    handleChangePhonenumber(event){
        this.setState({Phonenumber:event.target.value})
    }
    handleChangePassword(event){
        this.setState({Password:event.target.value})
    }
    handleChangePassword2(event){
        this.setState({Password2:event.target.value})
    }
    handleChangeUsername(event){
        this.setState({Username:event.target.value})
    }

    handleSubmit(){        
        const users = {
            Firstname: this.state.Firstname,
            Lastname: this.state.Lastname,
            Email: this.state.Email,
            Phonenumber: this.state.Phonenumber,
            Username: this.state.Username,
            Password: this.state.Password,
            Password2: this.state.Password2
    }

       axios({
           method:'post',
           url:'http://localhost:3000/api/user',
           data:{users}
       })
       .then(response =>{
           console.log(response)
           if(response.data){
               console.log('Successfully Registered');
               this.setState({
                   redirectTo: '/login'
               })  
           }
            else{
               console.log('sign-up error')
           }
       })
    }
    render(){
        return(
            <div className="register-main-container">
                <div className="register-mid-container">
                    <div className="register-top-container">
                        <h1>Sign Up</h1>
                    </div><br/>
                        <div className="register-input-container">
                            <form>
                                <FormGroup>
                                    <ControlLabel>First Name</ControlLabel>
                                    <FormControl
                                        type="text"
                                        placeholder="Enter first name"
                                        onChange={this.handleChangeFirstname}
                                    />
                                    <FormControl.Feedback/>
                                </FormGroup>
                                <FormGroup>
                                    <ControlLabel>Last Name</ControlLabel>
                                    <FormControl
                                        type="text"
                                        placeholder="Enter last name"
                                        onChange={this.handleChangeLastname}
                                    />
                                    <FormControl.Feedback/>
                                </FormGroup>
                                <FormGroup>
                                    <ControlLabel>Email</ControlLabel>
                                    <FormControl
                                        type="email"
                                        placeholder="Enter email address"
                                        onChange={this.handleChangeEmail}
                                    />
                                    <FormControl.Feedback/>
                                </FormGroup>
                                <FormGroup>
                                    <ControlLabel>Phone Number</ControlLabel>
                                    <FormControl
                                        type="number"
                                        placeholder="Enter phone number"
                                        onChange={this.handleChangePhonenumber}
                                    />
                                    <FormControl.Feedback/>
                                </FormGroup>
                                <FormGroup>
                                    <ControlLabel>Username</ControlLabel>
                                    <FormControl
                                        type="text"
                                        placeholder="Enter Username"
                                        onChange={this.handleChangeUsername}
                                    />
                                    <FormControl.Feedback/>
                                </FormGroup>
                                <FormGroup>
                                    <ControlLabel>Password</ControlLabel>
                                    <FormControl
                                        type="password"
                                        placeholder="Enter password"
                                        onChange={this.handleChangePassword}
                                    />
                                    <FormControl.Feedback/>
                                </FormGroup>
                                <FormGroup>
                                    <ControlLabel>Confirm Password</ControlLabel>
                                    <FormControl
                                        type="password"
                                        placeholder="Re-type password again"
                                        onChange={this.handleChangePassword2}
                                    />
                                    <FormControl.Feedback/>
                                </FormGroup>
                            </form>
                        </div>
                    <div className="register-bottom-container">
                        <Button bsStyle="primary" onClick ={this.handleSubmit}>Register</Button>
                    </div>
                </div>
            </div>
        )
    }
}



export default Register