import React, {Component} from 'react';
import { Grid, Loader, Message, Card, Image, Icon, Header, Table, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userProfileAction from '../redux/actions/userProfileAction';
import { getUserBookings, deleteBooking } from '../redux/actions/booking';
import moment from 'moment';
import axios from 'axios';


class SendInvite extends Component{
    constructor(props){
        super(props);
        this.state={
            user: []
        }
        
}
    componentDidMount() {
        this.props.profileActions.getUserProfile(this.props.Username);
        if (this.props.data._id) {
          this.props.getUserBookings(this.props.data._id);
        }
        axios.get('http://localhost:3000/api/user')
        .then(res=>
        {
            if(res.data) {
                // const d=[];
                this.setState({user:res.data});
                
            }
        })
   }

    render(){
        const {user,loading, data, error, bookerror, bookinglist, bookloading, idvalues } = this.props;
        console.log(this.state.user,'heheheheh');
        return (

      <Grid padded>
        <Grid.Column mobile={16} computer={4}>
        {loading && <Loader />}
        {!loading && (
            <Card fluid>
            <Image src={require('../images/playeravatar.jpg')} />
            <Card.Content>
                <Card.Header>
                <span>
                    {' '}
                    Name: {data.Firstname} {data.Lastname}
                </span>
                <span style={{ marginRight: '30px' }} />
                <span>
                    <Icon name="user" />
                    {data.Username}
                </span>
                </Card.Header>
                <Card.Meta>
                <br />
                <span className="date">
                    <Icon name="mail" /> {data.Email}
                </span>
                <span style={{ marginRight: '30px' }} />

                <span>
                    <Icon name="phone" />
                    {data.Phonenumber}
                </span>
                <br />
                </Card.Meta>
            </Card.Content>
            <Card.Content extra />
            </Card>
        )}
        {error && <Message negative>{error}</Message>}
        </Grid.Column>
        <Grid.Column mobile={16} computer={10}>
          <Header as="h1" color="grey">
            Send Invites
          </Header>

          {bookloading && <Loader />}
          <div style={{ height: '60vh', overflowY: 'scroll' }}>
            <Table celled stackable>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Email</Table.HeaderCell>
                  <Table.HeaderCell>Contact Number</Table.HeaderCell>
                  <Table.HeaderCell>Send Invites</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {this.state.user.length>0&&
                  this.state.user.map(user => {
                    return (
                      <Table.Row key={user._id}>
                        <Table.Cell>{user.Firstname } {user.Lastname}</Table.Cell>
                        <Table.Cell>{user.Email}</Table.Cell>
                        <Table.Cell>{user.Phonenumber}</Table.Cell>
                        <Table.Cell>
                          <Button
                            floated="right"
                            color="yellow"
                            onClick={() => {
                            //   this.props.deleteBooking(booking._id, data._id);
                            }}
                          >
                            Invite
                          </Button>
                        </Table.Cell>
                      </Table.Row>
                    );
                  })}
              </Table.Body>
            </Table>
          </div>
          {error && <Message negative>{bookerror}</Message>}
        </Grid.Column>
       
        {/* <ul>
            {user.map(data=>
                <li key={data.objectID}>
                    {data.Firstname}
                </li>)}
        </ul> */}
    </Grid>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.userprofile.loading,
    error: state.userprofile.error,
    data: state.userprofile.data,
    Username: state.login.Username,
    // bookinglist: state.booking.list,
    // bookloading: state.booking.loading,
    // bookerror: state.booking.error,
    idvalues: state.ground.ids,
    userloaded: state.userprofile.loaded
  });
  
  const mapDispatchToProps = dispatch => ({
    profileActions: bindActionCreators(userProfileAction, dispatch),
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SendInvite);
  