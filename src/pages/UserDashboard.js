import React, {Component} from 'react';
import {Grid, Loader, Message, Card, Image,Icon, Header, Item } from 'semantic-ui-react'
import { connect } from "react-redux";
import { bindActionCreators} from "redux";
import * as userProfileAction from '../redux/actions/userProfileAction'
import { getUserBookings, deleteBooking } from '../redux/actions/booking';

class UserDashboard extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.profileActions.getUserProfile(this.props.Username);

      }

      componentWillReceiveProps(newProps) {
        if(newProps.Username!==null && newProps.Username!==this.props.Username) {
        this.props.profileActions.getUserProfile(this.props.Username);
          
        }
        if(newProps.Username && !newProps.data.Username){
        this.props.profileActions.getUserProfile(this.props.Username);
            
        }
        if(newProps.userloaded) {
          this.props.getUserBookings(newProps.data._id);
        }
      }
    
    render(){
        const {loading, data, error,bookerror,bookinglist,bookloading,idvalues}=this.props;
        return(
        <Grid padded>
          
            <Grid.Column mobile={16}computer={4}>
            {loading && <Loader/>}
            {!loading && 
            <Card fluid> 
            <Image src={require('../images/playeravatar.jpg')} />
            <Card.Content>
                 <Card.Header>
                 <span> Name: {data.Firstname} {data.Lastname}</span>
                 <span style={{marginRight:'30px'}}/>
                   <span><Icon name="user"/>{data.Username}</span> 
                   </Card.Header>
                 <Card.Meta>
                   <br/>
                   <span className='date'><Icon name="mail"/> {data.Email}</span>
                 <span style={{marginRight:'30px'}}/>
                   
                   <span><Icon name="phone"/>{data.Phonenumber}</span>
                   <br/>
                  
                 </Card.Meta>
               </Card.Content>
               <Card.Content extra>
               </Card.Content>
                     </Card>}
             {error && <Message negative>{error}</Message>}
           </Grid.Column>
           <Grid.Column mobile={16}computer={10}>
            <Header as="h1" color="grey">My Bookings</Header>
            <br/><br/>
            {bookloading&&<Loader />}
            {bookinglist && bookinglist.map(booking=>{return(
              <Item>
<Item.Content verticalAlign='middle'>
        <Item.Header>{idvalues[booking.groundId].name}</Item.Header>
        <Item.Description>For- {booking.date}</Item.Description>
        <Item.Extra>
          <Button floated='right' color="red" onClick={()=>{this.props.deleteBooking(booking._id,data._id)}}>Cancel</Button>
        </Item.Extra>
      </Item.Content>
              </Item>
            )})}
             {error && <Message negative>{bookerror}</Message>}

          </Grid.Column>
        </Grid>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.userprofile.loading,
    error: state.userprofile.error,
    data: state.userprofile.data,
    Username: state.login.Username,
    bookinglist: state.booking.list,
    bookloading: state.booking.loading,
    bookerror: state.booking.error,
    idvalues:state.ground.ids
  });
  
  const mapDispatchToProps = dispatch => ({
    profileActions: bindActionCreators(userProfileAction, dispatch),
    getUserBookings: bindActionCreators(getUserBookings,dispatch)
  });

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard)
