import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Header, Segment, Button, Icon } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { getFilteredBookings, getAvailability } from '../redux/actions/booking';
// import * as actionCreator from './';

const square = { width: 175, height: 175, cursor: 'pointer' };

class BookPage extends Component {
  constructor(props) {
    super(props);
    this.state = { date: moment(), isOpen: false };
    this.handleChange = this.handleChange.bind(this);
    this.getAvailability = this.getAvailability.bind(this);
  }

  handleChange(date) {
    this.setState({
      date: date,
      isOpen: false
    });

    this.getAvailability();
  }

  getAvailability() {
    const groundId = this.props.location.pathname.substr(this.props.location.pathname.lastIndexOf('/') + 1);
    this.props.getAvailability(groundId, this.state.date);
  }
  componentDidMount() {
    this.getAvailability();
  }

  componentWillReceiveProps(newProps) {
    if(newProps.location.pathname!==this.props.location.pathname) {
    this.getAvailability();
    }
  }

  bookGround() {

  }

  render() {
    console.log(this.props);
    const curr = new Date();
    const currenthour = curr.getHours();
    const currday = moment();
    console.log(currenthour);
    console.log('checcck',...{a:2},{});
    const { booking } = this.props;
    return (
      <div>
        <Header as="h1" textAlign="center">
          Book Your Game Time
        </Header>
        <br />
        <br />
        <Grid centered padded stackable columns={4}>
          <Grid.Column>
            <Header as="h2">Change Date</Header>
            <Segment circular color="green" raised style={square} onClick={() => this.setState({ isOpen: true })}>
              <Header as="h2">
                <br />
                <Header.Subheader>
                  <Icon name="calendar" size="big" />
                </Header.Subheader>
              </Header>
              <h3> {this.state.date.format('DD-MM-YYYY')}</h3>
            </Segment>

            {this.state.isOpen && (
              <DatePicker
                inline
                withPortal
                selected={this.state.date}
                onChange={this.handleChange}
                minDate={moment()}
                maxDate={moment().add(2, 'weeks')}
              />
            )}
          </Grid.Column>
          <Grid.Column>
            <Header as="h2">Available On</Header>
            <Button
              size="large"
              color={booking['1'] ? 'red' : 'green'}
              disabled={
                (currday.format('DD-MM-YYYY') == this.state.date.format('DD-MM-YYYY') && currenthour > 7) || booking['1']
              }
              onClick={() => {}}
            >
              7 am - 9 am
            </Button>
            <Button
              size="large"
              color={booking['2'] ? 'red' : 'green'}
              disabled={
                (currday.format('DD-MM-YYYY') == this.state.date.format('DD-MM-YYYY') && currenthour > 9) || booking['2']
              }
              onClick={() => {}}
            >
              9 am - 11am
            </Button>
            <br />
            <br />
            <br />
            <Button
              size="large"
              color={booking['3'] ? 'red' : 'green'}
              disabled={
                (currday.format('DD-MM-YYYY') == this.state.date.format('DD-MM-YYYY') && currenthour > 11) || booking['3']
              }
              onClick={() => {}}
            >
              11 am - 1 pm
            </Button>
            <Button
              size="large"
              color={booking['4'] ? 'red' : 'green'}
              disabled={
                (currday.format('DD-MM-YYYY') == this.state.date.format('DD-MM-YYYY') && currenthour > 13) || booking['4']
              }
              onClick={() => {}}
            >
              1 pm - 3 pm
            </Button>
            <br />
            <br />
            <br />
            <Button
              size="large"
              color={booking['5'] ? 'red' : 'green'}
              disabled={
                (currday.format('DD-MM-YYYY') == this.state.date.format('DD-MM-YYYY') && currenthour > 15) || booking['5']
              }
              onClick={() => {}}
            >
              3 pm - 5pm
            </Button>
            <Button
              size="large"
              color={booking['6'] ? 'red' : 'green'}
              disabled={
                (currday.format('DD-MM-YYYY') == this.state.date.format('DD-MM-YYYY') && currenthour > 17) || booking['6']
              }
              onClick={() => {}}
            >
              5 pm - 7pm
            </Button>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br /> <br />
            <br />
            <br />
            <br />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getFilteredBookings: bindActionCreators(getFilteredBookings, dispatch),
    getAvailability: bindActionCreators(getAvailability, dispatch)
  };
};

const mapStateToProps = state => ({
  location: state.router.location,
  booking: state.booking.currentBooking,
  user:state.userprofile.data
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookPage);
