import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Header, Segment, Button, Icon } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { getFilteredBookings } from '../redux/actions/booking';
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
    const groundId = this.props.match.params.groundId;
    this.props.getFilteredBookings(groundId, this.state.date);
  }
  componentDidMount() {}

  componentWillReceiveProps(newProps) {}

  render() {
    console.log(this.props);
    return (
      <div>
        <Header as="h1" textAlign="center">
          Book Your Game Time
        </Header>
        <br />
        <br />
        <Grid centered padded columns={3}>
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
            <Button size="large" disabled={false} onClick={() => {}}>
              7 am - 9 am
            </Button>
            <Button size="large" disabled={false} onClick={() => {}}>
              9 am - 11am
            </Button>
            <Button size="large" disabled={false} onClick={() => {}}>
              11 am - 1 pm
            </Button>
            <br />
            <br />
            <br />
            <Button size="large" disabled={false} onClick={() => {}}>
              1 pm - 3 pm
            </Button>
            <Button size="large" disabled={false} onClick={() => {}}>
              3 pm - 5pm
            </Button>
            <Button size="large" disabled={false} onClick={() => {}}>
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
  };
};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookPage);
