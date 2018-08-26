import React from 'react';
import passport from 'passport-local';
import axios from 'axios'
import {Alert,Button,FormGroup, controlId, Label,FormControl,HelpBlock,ControlLabel} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Register from './Register';


class Login extends React.Component{
    constructor(props,context){
        super(props,context);
        
        this.onSubmit = this.onSubmit.bind(this);
        this.handlenameChange = this.handlenameChange.bind(this);
        this.handlepasswordChange = this.handlepasswordChange.bind(this)
        this.state = {
            username:'', password:''
        }
    }

    getValidationState(){
        const length = this.state.username.length;
        if(length > 6) return 'success';
        else if(length > 5) return 'warning';
        else if(length > 0) return 'error';
        return null;
    }
    
    handlenameChange(e){
        this.setState({username:e.target.value});
    }
    handlepasswordChange(e){
        this.setState({password:e.target.value})
    }

    
    // onSubmit(e){
    //     e.preventDefault();

    //     const {username, password}=this.state;
    //     const {history} = this.props;

    //     this.setState({error: false});

    //     if(!(username ==='nijar' && password === 'nijar')){
    //         return this.setState({error: true});
    //     }

        
    //     history.push('/bookingpage');
    // }

    
    render(){
        return(
            <div className="login-main-container">
                <div className="login-mid-container">
                    <div className="login-top-container">
                        <h1>Login</h1>
                    </div><br/>
                        <div className="login-input-container">
                            <form>
                                <FormGroup 
                                        controlId="formBasicText"
                                        validationState={this.getValidationState()}
                                    >
                                    <ControlLabel>Username</ControlLabel>
                                    <FormControl
                                        type="text"
                                        username={this.state.username}
                                        placeholder="Enter Username"
                                        onChange={this.handlenameChange}
                                    />
                                    <FormControl.Feedback/>
                                    </FormGroup>
                                    <FormGroup 
                                        controlId="formBasicPassword"
                                        validationState={this.getValidationState()}
                                    >
                                    <ControlLabel>Password</ControlLabel>
                                    <FormControl
                                        type="password"
                                        password={this.state.password}
                                        placeholder="Enter Password"
                                        onChange={this.handlepasswordChange}
                                    />
                                    <FormControl.Feedback/>
                                </FormGroup>
                            </form>
                        </div>
                    <div className="login-bottom-container">
                        <div className="signin-button">
                            <Button onClick={this.onSubmit} bsStyle="success">Sign In</Button> 
                            <br/><br/>
                            <div className="register-link">
                                <Link to="/Register">Click here to register</Link>      
                            </div>
                        </div>
                        {/* <div className="signup-button">
                            <Button bsStyle="success">Register</Button> 
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Login