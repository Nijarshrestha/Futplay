import React, {Component} from 'react';
import { Button, Form, Checkbox, Grid, Header, Image, Message, Segment } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";


const RegisterForm = props=>{
    const { handleSubmit, loggingIn, err } = props;
    return(
        <div className="login-form">
        {err && (<Message negative>
            <Message.Header>Error occured</Message.Header>
            {err.message}
        </Message>
        )}
        <Grid textAlign="center" style={{ height: "auto" }} verticalAlign="middle">
            <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="black" textAlign="center">
                Sign-Up for Futplay
            </Header>
            <Form size="large" >
                <Segment stacked>
                <Field
                    fluid
                    icon="user"
                    name="Username"
                    component={Form.Input}
                    iconPosition="left"
                    placeholder="User Name"
                    required
                />
                <Field
                    fluid
                    icon="user"
                    name="Username"
                    component={Form.Input}
                    iconPosition="left"
                    placeholder="User Name"
                    required
                />
                <Field
                    fluid
                    icon="user"
                    name="Username"
                    component={Form.Input}
                    iconPosition="left"
                    placeholder="User Name"
                    required
                />
                <Field
                    fluid
                    icon="user"
                    name="Username"
                    component={Form.Input}
                    iconPosition="left"
                    placeholder="User Name"
                    required
                />
                <Field
                    fluid
                    icon="lock"
                    iconPosition="left"
                    component={Form.Input}
                    name="Password"
                    placeholder="Password"
                    type="password"
                    required
                />
                <Form.Field control={Checkbox} label={{ children: 'I agree to the Terms and Conditions' }} />
                <Button type='submit' color="black">
                    Sign-Up
                    </Button>
                </Segment>
            </Form>
            <Message>
                Already Registered <a href="/login">LogIn</a>
            </Message>
            </Grid.Column>
        </Grid>
        </div> 
    )
}

    
export default reduxForm({
    form: "login" // a unique identifier for this form
  })(RegisterForm);