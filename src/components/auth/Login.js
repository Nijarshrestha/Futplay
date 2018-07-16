import React from 'react';
import {Alert,Button,FormGroup, controlId, Label,FormControl,HelpBlock,ControlLabel} from 'react-bootstrap'

class Login extends React.Component{
    constructor(props,context){
        super(props,context);
        
        this.handlenameChange = this.handlenameChange.bind(this);
        this.handlepasswordChange = this.handlepasswordChange.bind(this)
        this.state = {
            value:'', password:''
        }
    }

    getValidationState(){
        const length = this.state.value.length;
        if(length > 6) return 'success';
        else if(length > 5) return 'warning';
        else if(length > 0) return 'error';
        return null;
    }
    
    handlenameChange(e){
        this.setState({value:e.target.value});
    }
    handlepasswordChange(e){
        this.setState({password:e.target.value})
    }
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
                                        value={this.state.value}
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
                            <Button bsStyle="success">Sign In</Button> 
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