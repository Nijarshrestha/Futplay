import React from 'react';
import {Alert, Button, FormGroup, controlId, Label,FormControl,HelpBlock,ControlLabel} from 'react-bootstrap'

class Register extends React.Component{
    constructor(props){
        super(props);

        this.handleDismiss = this.handleDismiss.bind(this);
        this.handleShow = this.handleShow.bind(this);

        this.state= {
            show:true
        }
    }
    handleDismiss() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }
    render(){
    //     if (this.state.show) {
    //         return (
    //           <Alert bsStyle="warning" onDismiss={this.handleDismiss}>
    //             <h4>Oh snap! You got an error!</h4>
    //             <p>
    //               Change this and that and try again. Duis mollis, est non commodo
    //               luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
    //               Cras mattis consectetur purus sit amet fermentum.
    //             </p>
    //             <p>
    //               <Button bsStyle="danger">Take this action</Button>
    //               <span> or </span>
    //               <Button onClick={this.handleDismiss}>Hide Alert</Button>
    //             </p>
    //           </Alert>
    //         );
    //       }
      
    //       return <Button onClick={this.handleShow}>Show Alert</Button>;
    //     }
    // }
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
                                    />
                                    <FormControl.Feedback/>
                                </FormGroup>
                                <FormGroup>
                                    <ControlLabel>Last Name</ControlLabel>
                                    <FormControl
                                        type="text"
                                        placeholder="Enter last name"
                                    />
                                    <FormControl.Feedback/>
                                </FormGroup>
                                <FormGroup>
                                    <ControlLabel>Email</ControlLabel>
                                    <FormControl
                                        type="email"
                                        placeholder="Enter email address"
                                    />
                                    <FormControl.Feedback/>
                                </FormGroup>
                                <FormGroup>
                                    <ControlLabel>Phone Number</ControlLabel>
                                    <FormControl
                                        type="number"
                                        placeholder="Enter phone number"
                                    />
                                    <FormControl.Feedback/>
                                </FormGroup>
                                <FormGroup>
                                    <ControlLabel>Password</ControlLabel>
                                    <FormControl
                                        type="password"
                                        placeholder="Enter password"
                                    />
                                    <FormControl.Feedback/>
                                </FormGroup>
                                <FormGroup>
                                    <ControlLabel>Confirm Password</ControlLabel>
                                    <FormControl
                                        type="password"
                                        placeholder="Re-type password again"
                                    />
                                    <FormControl.Feedback/>
                                </FormGroup>
                            </form>
                        </div>
                    <div className="register-bottom-container">
                        <Button bsStyle="primary">Register</Button>
                    </div>
                </div>
            </div>
        )
    }
}



export default Register