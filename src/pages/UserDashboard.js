import React, { Component } from 'react';
import { Grid, Loader, Message, Card, Image, Icon, Header, Table, Button, Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userProfileAction from '../redux/actions/userProfileAction';
import { getUserBookings, deleteBooking } from '../redux/actions/booking';
import moment from 'moment';
import SendInvite from './SendInvite';
import axios from 'axios';


const Tim = {
  '1': '7 am - 9 am',
  '2': '9 am - 11am',
  '3': '11 am - 1 pm',
  '5': ' 3 pm - 5pm',
  '6': '5 pm - 7pm',
  '4': '1 pm - 3 pm'
};

class UserDashboard extends Component {
  constructor(props) {
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

  componentWillReceiveProps(newProps) {
    if (newProps.Username !== null && newProps.Username !== this.props.Username) {
      this.props.profileActions.getUserProfile(this.props.Username);
    }
    if (newProps.Username && !newProps.data.Username) {
      this.props.profileActions.getUserProfile(this.props.Username);
    }
    if (newProps.userloaded !== this.props.userloaded && newProps.userloaded) {
      this.props.getUserBookings(newProps.data._id);
    }
  }

  render() {
    const {user,loading, data, error, bookerror, bookinglist, bookloading, idvalues } = this.props;
  
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
            My Bookings
          </Header>

          {bookloading && <Loader />}
          <div style={{ height: '60vh', overflowY: 'scroll' }}>
            <Table celled stackable>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Futsal Ground Name</Table.HeaderCell>
                  <Table.HeaderCell>Date of Booking</Table.HeaderCell>
                  <Table.HeaderCell>Contact of Futsal Ground</Table.HeaderCell>
                  <Table.HeaderCell>Time</Table.HeaderCell>
                  <Table.HeaderCell>UnReserve</Table.HeaderCell>
                  <Table.HeaderCell>Invitation</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {bookinglist &&
                  bookinglist.map(booking => {
                    return (
                      <Table.Row key={booking._id}>
                        <Table.Cell>{idvalues[booking.groundId].name}</Table.Cell>
                        <Table.Cell>{booking.date.replace(/d/g, '-')}</Table.Cell>
                        <Table.Cell>{idvalues[booking.groundId].phone}</Table.Cell>
                        <Table.Cell>{Tim[booking.slots]}</Table.Cell>
                        <Table.Cell>
                          <Button
                            floated="right"
                            color="yellow"
                            disabled={moment().format('DD-MM-YYYY') > moment(booking.date.replace(/d/g, '-'))}
                            onClick={() => {
                              this.props.deleteBooking(booking._id, data._id);
                            }}
                          >
                            UnReserve
                          </Button>
                        </Table.Cell>
                        <Table.Cell>
                          <Modal trigger={<Button color="green">Invite</Button>}>
                            <Modal.Header>Send Invitation</Modal.Header>
                            <Modal.Content>
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
                            </Modal.Content>
                          </Modal>
                        </Table.Cell>
                      </Table.Row>
                    );
                  })}
              </Table.Body>
            </Table>
          </div>
          {error && <Message negative>{bookerror}</Message>}
        </Grid.Column>
      </Grid>
    );
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
  idvalues: state.ground.ids,
  userloaded: state.userprofile.loaded
});

const mapDispatchToProps = dispatch => ({
  profileActions: bindActionCreators(userProfileAction, dispatch),
  getUserBookings: bindActionCreators(getUserBookings, dispatch),
  deleteBooking: bindActionCreators(deleteBooking, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDashboard);
