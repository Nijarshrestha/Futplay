import React, {Component} from 'react';
import {Grid, Loader, Message, Card, Image,Icon, Header } from 'semantic-ui-react'
import { connect } from "react-redux";
import { bindActionCreators} from "redux";
import * as userProfileAction from '../redux/actions/userProfileAction'

class UserDashboard extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.profileActions.getUserProfile(this.props.Username)
      }

      componentWillReceiveProps(newProps) {
        if(newProps.Username!==null && newProps.Username!==this.props.Username) {
        this.props.profileActions.getUserProfile(this.props.Username);
          
        }
        if(newProps.Username && !newProps.data.Username){
        this.props.profileActions.getUserProfile(this.props.Username);
            
        }
      }
    
    render(){
        const {loading, data, error}=this.props;
        return(
        <Grid>
            <Grid.Column width={4}>
            {loading && <Loader/>}
            {!loading && 

             <Card>
               <Header  textAlign='center' as ="h1">Profile</Header>
               <Card.Content>
                 <Card.Header> <Icon name="user"/>{data.Username}</Card.Header>
                 <Card.Meta>
                   <span className='date'><Icon name="mail"/> {data.Email}</span>
                 </Card.Meta>
                 <Card.Description><Icon name="phone"/>{data.Phonenumber}</Card.Description>
                 <Card.Description>{data.Firstname} {data.Lastname}</Card.Description>
               </Card.Content>
               <Card.Content extra>
               </Card.Content>
             </Card>}
             {error && <Message negative>{error}</Message>}
           </Grid.Column>
        </Grid>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.userprofile.loading,
    error: state.userprofile.error,
    data: state.userprofile.data,
    Username: state.login.Username
    
  });
  
  const mapDispatchToProps = dispatch => ({
    profileActions: bindActionCreators(userProfileAction, dispatch),
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard)
